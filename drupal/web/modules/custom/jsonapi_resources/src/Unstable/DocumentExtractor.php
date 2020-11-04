<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable;

use Drupal\Component\Plugin\Exception\PluginNotFoundException;
use Drupal\Component\Uuid\Uuid;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi\JsonApiResource\LinkCollection;
use Drupal\jsonapi\JsonApiResource\NullIncludedData;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi\ResourceType\ResourceType;
use Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface;
use Drupal\jsonapi\Serializer\Serializer;
use Drupal\jsonapi_resources\Unstable\Value\NewResourceObject;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;
use UnexpectedValueException;

/**
 * Document extractor for requests.
 *
 * @internal
 */
final class DocumentExtractor {

  /**
   * The JSON:API serializer.
   *
   * @var \Drupal\jsonapi\Serializer\Serializer
   */
  protected $serializer;

  /**
   * The JSON:API resource type repository.
   *
   * @var \Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface
   */
  protected $resourceTypeRepository;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Static cache of documents from requests.
   *
   * @var \SplObjectStorage
   */
  private $documents;

  /**
   * Constructs a new DocumentExtractor object.
   *
   * @param \Drupal\jsonapi\Serializer\Serializer $serializer
   *   The JSON:API serializer.
   * @param \Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface $resource_type_repository
   *   The JSON:API resource type repository.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   */
  public function __construct(Serializer $serializer, ResourceTypeRepositoryInterface $resource_type_repository, EntityTypeManagerInterface $entity_type_manager) {
    $this->documents = new \SplObjectStorage();
    $this->serializer = $serializer;
    $this->resourceTypeRepository = $resource_type_repository;
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * Gets the document from the request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   *
   * @return \Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel
   *   The document.
   */
  public function getDocument(Request $request) {
    if (!$this->documents->contains($request)) {
      $this->documents[$request] = $this->extractDocument($request);
    }

    return $this->documents[$request];
  }

  /**
   * Extracts the JSON:API document from a request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   *
   * @return \Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel
   *   The document.
   */
  protected function extractDocument(Request $request) {
    return new JsonApiDocumentTopLevel(new ResourceObjectData([$this->extractResourceObjectFromRequest($request)], 1), new NullIncludedData(), new LinkCollection([]));
  }

  /**
   * Decodes and builds a resource object from a request body.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   *
   * @return \Drupal\jsonapi_resources\Unstable\Value\NewResourceObject
   *   A new resource object.
   */
  protected function extractResourceObjectFromRequest(Request $request) {
    $decoded = $this->decodeRequestPayload($request);
    $primary_data = $decoded['data'] ?? [];
    if (isset($decoded['data'][0])) {
      // The `data` member of a request document can only be an array if it is
      // updating a relationship. If the objects in a data array are resource
      // object, not resource identifiers, then it's because of a developer
      // error.
      if (!empty(array_intersect_key($decoded['data'][0], array_flip(['attributes', 'relationships'])))) {
        throw new UnprocessableEntityHttpException("To add or update a resource object, the request document's primary data must not be an array.");
      }
      else {
        throw new HttpException(501, 'The JSON:API Resources module does not yet support updating relationships.');
      }
    }
    if (!isset($primary_data['type'])) {
      throw new UnprocessableEntityHttpException("The document's primary data must have a `type` member.");
    }
    // Ensure that the client provided ID is a valid UUID.
    if (isset($primary_data['id']) && !Uuid::isValid($primary_data['id'])) {
      throw new UnprocessableEntityHttpException('IDs should be properly generated and formatted UUIDs as described in RFC 4122. See https://jsonapi.org/format/#crud-creating-client-ids.');
    }
    /* @var \Drupal\jsonapi\ResourceType\ResourceType[] $route_resource_types */
    $route_resource_types = $request->attributes->get('resource_types');
    foreach ($route_resource_types as $route_resource_type) {
      if ($primary_data['type'] === $route_resource_type->getTypeName()) {
        $resource_type = $route_resource_type;
      }
    }
    if (!isset($resource_type)) {
      $format = "The document's primary data contains a resource object with a type that cannot be created via this URL. Allowed resource types: `%s`";
      $supported_resource_types = array_map(static function (ResourceType $resource_type) {
        return $resource_type->getTypeName();
      }, $route_resource_types);
      $message = sprintf($format, implode('`, `', $supported_resource_types));
      throw new AccessDeniedHttpException($message);
    }
    // Ensure that no relationship fields are being set via the attributes
    // resource object member.
    if (isset($primary_data['attributes'])) {
      $received_attribute_field_names = array_keys($primary_data['attributes']);
      $relationship_field_names = array_keys($resource_type->getRelatableResourceTypes());
      if ($relationship_fields_sent_as_attributes = array_intersect($received_attribute_field_names, $relationship_field_names)) {
        throw new UnprocessableEntityHttpException(sprintf('The following relationship fields were provided as attributes: [ %s ]', implode(', ', $relationship_fields_sent_as_attributes)));
      }
    }

    if (isset($decoded['data']['relationships'])) {
      $primary_data['relationships'] = $this->handleRelationships($decoded['data']);
    }

    return NewResourceObject::createFromPrimaryData($resource_type, $primary_data);
  }

  /**
   * Decodes a request payload.
   *
   * Mostly a duplication from the JSON:API module.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   *
   * @return array
   *   The request payload decoded into a multi-dimensional array.
   *
   * @see \Drupal\jsonapi\Controller\EntityResource::deserialize()
   */
  protected function decodeRequestPayload(Request $request): array {
    $received = (string) $request->getContent();
    if (!$received) {
      $relationship_field_name = $request->attributes->get('_jsonapi_relationship_field_name');
      if ($request->isMethod('DELETE') && $relationship_field_name) {
        throw new BadRequestHttpException(sprintf('You need to provide a body for DELETE operations on a relationship (%s).', $relationship_field_name));
      }
      else {
        throw new BadRequestHttpException('Empty request body.');
      }
    }

    // First decode the request data. We can then determine if the serialized
    // data was malformed.
    try {
      $decoded = $this->serializer->decode($received, 'api_json');
    }
    catch (UnexpectedValueException $e) {
      // If an exception was thrown at this stage, there was a problem decoding
      // the data. Throw a 400 HTTP exception.
      throw new BadRequestHttpException($e->getMessage());
    }

    return $decoded;
  }

  /**
   * Builds the relationships for the resource object.
   *
   * @param array $data
   *   Multi-dimensional array containing the decoded data.
   *
   * @return array
   *   The relationships array.
   */
  protected function handleRelationships(array $data): array {
    // Turn all single object relationship data fields into an array of objects.
    $relationships = array_map(function ($relationship) {
      if (isset($relationship['data']['type']) && isset($relationship['data']['id'])) {
        return ['data' => [$relationship['data']]];
      }
      else {
        return $relationship;
      }
    }, $data['relationships']);

    $result = [];
    // Get an array of ids for every relationship.
    foreach ($relationships as $relationship_field => $relationship) {
      if (empty($relationship['data'])) {
        return [];
      }
      if (empty($relationship['data'][0]['id'])) {
        throw new BadRequestHttpException('No ID specified for related resource');
      }
      $id_list = array_column($relationship['data'], 'id');
      if (empty($relationship['data'][0]['type'])) {
        throw new BadRequestHttpException('No type specified for related resource');
      }
      if (!$resource_type = $this->resourceTypeRepository->getByTypeName($relationship['data'][0]['type'])) {
        throw new BadRequestHttpException(sprintf('Invalid type specified for related resource: "%s"', $relationship['data'][0]['type']));
      }

      $entity_type_id = $resource_type->getEntityTypeId();
      try {
        $entity_storage = $this->entityTypeManager->getStorage($entity_type_id);
      }
      catch (PluginNotFoundException $e) {
        throw new BadRequestHttpException(sprintf('Invalid type specified for related resource: "%s"', $relationship['data'][0]['type']));
      }
      // In order to maintain the order ($delta) of the relationships, we need
      // to load the entities and create a mapping between id and uuid.
      $uuid_key = $this->entityTypeManager->getDefinition($entity_type_id)->getKey('uuid');
      $related_entities = array_values($entity_storage->loadByProperties([$uuid_key => $id_list]));
      $map = [];
      foreach ($related_entities as $related_entity) {
        $map[$related_entity->uuid()] = $related_entity->id();
      }

      // $id_list has the correct order of uuids. We stitch this together with
      // $map which contains loaded entities, and then bring in the correct
      // meta values from the relationship, whose deltas match with $id_list.
      $canonical_ids = [];
      foreach ($id_list as $delta => $uuid) {
        if (!isset($map[$uuid])) {
          // @see \Drupal\jsonapi\Normalizer\EntityReferenceFieldNormalizer::normalize()
          if ($uuid === 'virtual') {
            continue;
          }
          throw new NotFoundHttpException(sprintf('The resource identified by `%s:%s` (given as a relationship item) could not be found.', $relationship['data'][$delta]['type'], $uuid));
        }
        $reference_item = [
          'target_id' => $map[$uuid],
        ];
        if (isset($relationship['data'][$delta]['meta'])) {
          $reference_item += $relationship['data'][$delta]['meta'];
        }
        $canonical_ids[] = $reference_item;
      }

      $result[$relationship_field] = $canonical_ids;
    }

    return $result;
  }

}
