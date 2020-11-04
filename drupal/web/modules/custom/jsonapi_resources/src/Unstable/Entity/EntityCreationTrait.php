<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Entity;

use Drupal\Component\Plugin\Exception\PluginNotFoundException;
use Drupal\Core\Cache\CacheableResponseInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\jsonapi\Entity\EntityValidationTrait;
use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi\JsonApiResource\ResourceObject;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

/**
 * Provides methods for handling POST requests that should create an entity.
 *
 * @internal
 *   Classes should not directly use this trait. Instead, classes should extend
 *   \Drupal\jsonapi_resource\Resource\EntityResourceBase or one of its
 *   child classes to gain access to these methods.
 */
trait EntityCreationTrait {

  use ResourceObjectToEntityMapperAwareTrait;
  use EntityValidationTrait;

  /**
   * Process the resource request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param \Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel $request_document
   *   The deserialized request document.
   *
   * @return \Drupal\jsonapi\ResourceResponse
   *   The response.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\ConflictHttpException
   *   Thrown when the entity to be created already exists.
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   *   Thrown if the storage handler couldn't be loaded.
   * @throws \Drupal\Core\Entity\EntityStorageException
   *   Thrown if the entity could not be saved.
   */
  protected function processEntityCreation(Request $request, JsonApiDocumentTopLevel $request_document) {
    $data = $request_document->getData();
    if ($data->getCardinality() !== 1) {
      throw new UnprocessableEntityHttpException("The request document's primary data must not be an array.");
    }
    $entity = $this->resourceObjectToEntityMapper->createEntityFromResourceObject($data->getIterator()->current());

    // Allow the class using this trait to modfiy the created entity before it
    // is saved.
    $this->modifyCreatedEntity($entity, $request);

    static::validate($entity);

    // Return a 409 Conflict response in accordance with the JSON:API spec. See
    // http://jsonapi.org/format/#crud-creating-responses-409.
    try {
      // @todo: remove the assignment of the entity type manager to a variable when an "Aware" interface is added.
      /* @var \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager */
      /* @var \Drupal\Core\Entity\EntityStorageInterface $entity_storage */
      $entity_type_manager = $this->entityTypeManager;
      $entity_storage = $entity_type_manager->getStorage($entity->getEntityTypeId());
    }
    catch (PluginNotFoundException $e) {
      assert(FALSE, "It is impossible to encounter this exception. An entity can't be created if its entity type ID does not exist.");
    }
    if (!empty($entity_storage->loadByProperties(['uuid' => $entity->uuid()]))) {
      throw new ConflictHttpException('Conflict: Entity already exists.');
    }

    $entity->save();

    $data = $this->createIndividualDataFromEntity($entity);
    $resource_object = $data->getIterator()->current();
    assert($resource_object instanceof ResourceObject);
    $response = $this->createJsonapiResponse($data, $request, 201);

    // According to JSON:API specification, when a new entity was created
    // we should send "Location" header to the frontend.
    if ($resource_object->getResourceType()->isLocatable()) {
      $url = $resource_object->toUrl()->setAbsolute()->toString(TRUE);
      $response->headers->set('Location', $url->getGeneratedUrl());
      if ($response instanceof CacheableResponseInterface) {
        $response->addCacheableDependency($url);
      }
    }

    return $response;
  }

  /**
   * Modifies the created entity before it is saved.
   *
   * This method can be overridden so that custom JSON:API resources can modify
   * the created entity before it is saved.
   *
   * Classes overriding this method have access to the same arguments as a
   * JSON:API resource's process() method by calling
   * $request->arguments->get($arg_name).
   *
   * @param \Drupal\Core\Entity\EntityInterface $created_entity
   *   The created entity.
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object.
   */
  protected function modifyCreatedEntity(EntityInterface $created_entity, Request $request) {
    // no-op.
  }

}
