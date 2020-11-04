<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Resource;

use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi\JsonApiResource\LinkCollection;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi\ResourceResponse;
use Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface;
use Drupal\jsonapi_resources\Exception\RouteDefinitionException;
use Drupal\jsonapi_resources\Unstable\DocumentExtractor;
use Drupal\jsonapi_resources\Unstable\ResourceResponseFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Route;

/**
 * Defines basic functionality for a JSON:API Resource.
 */
abstract class ResourceBase {

  /**
   * The resource type repository.
   *
   * @var \Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface
   */
  protected $resourceTypeRepository;

  /**
   * The resource response factory.
   *
   * @var \Drupal\jsonapi_resources\Unstable\ResourceResponseFactory
   */
  private $resourceResponseFactory;

  /**
   * The document extractor.
   *
   * @var \Drupal\jsonapi_resources\Unstable\DocumentExtractor
   */
  private $documentExtractor;

  /**
   * Sets the resource type repository.
   *
   * @param \Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface $resource_type_repository
   *   A resource type repository.
   */
  public function setResourceTypeRepository(ResourceTypeRepositoryInterface $resource_type_repository): void {
    $this->resourceTypeRepository = $resource_type_repository;
  }

  /**
   * Sets the resource response factory.
   *
   * @param \Drupal\jsonapi_resources\Unstable\ResourceResponseFactory $resource_response_factory
   *   A JSON:API resource response factory.
   */
  public function setResourceResponseFactory(ResourceResponseFactory $resource_response_factory): void {
    $this->resourceResponseFactory = $resource_response_factory;
  }

  /**
   * Sets the document extractor.
   *
   * @param \Drupal\jsonapi_resources\Unstable\DocumentExtractor $document_extractor
   *   The document extractor.
   */
  public function setDocumentExtractor(DocumentExtractor $document_extractor): void {
    $this->documentExtractor = $document_extractor;
  }

  /**
   * Get the document from the request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   *
   * @return \Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel
   *   The document.
   */
  protected function getDocumentFromRequest(Request $request): JsonApiDocumentTopLevel {
    return $this->documentExtractor->getDocument($request);
  }

  /**
   * Builds a response with the appropriate wrapped document.
   *
   * @param \Drupal\jsonapi\JsonApiResource\ResourceObjectData $data
   *   The data to wrap.
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object.
   * @param int $response_code
   *   The response code.
   * @param array $headers
   *   An array of response headers.
   * @param \Drupal\jsonapi\JsonApiResource\LinkCollection $links
   *   The URLs to which to link. A 'self' link is added automatically.
   * @param array $meta
   *   (optional) The top-level metadata.
   *
   * @return \Drupal\jsonapi\ResourceResponse
   *   The response.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  protected function createJsonapiResponse(ResourceObjectData $data, Request $request, $response_code = 200, array $headers = [], LinkCollection $links = NULL, array $meta = []): ResourceResponse {
    return $this->resourceResponseFactory->create($data, $request, $response_code, $headers, $links, $meta);
  }

  /**
   * {@inheritdoc}
   */
  public function getRouteResourceTypes(Route $route, string $route_name): array {
    return array_map(function ($resource_type_name) use ($route_name) {
      $resource_type = $this->resourceTypeRepository->getByTypeName($resource_type_name);
      if (is_null($resource_type)) {
        // @todo: try to move this exception into Drupal\jsonapi_resources\Routing\ResourceRoutes::ensureResourceImplementationValid().
        throw new RouteDefinitionException("The $route_name route definition's _jsonapi_resource_types route default declares the resource type $resource_type_name but a resource type by that name does not exist.");
      }
      return $resource_type;
    }, $route->getDefault('_jsonapi_resource_types') ?: []);
  }

}
