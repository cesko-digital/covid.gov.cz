<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Controller;

use Drupal\Core\DependencyInjection\ClassResolverInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi\ResourceResponse;
use Drupal\jsonapi\ResourceType\ResourceType;
use Drupal\jsonapi_resources\Exception\ResourceImplementationException;
use Drupal\jsonapi_resources\Resource\ResourceBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ArgumentResolverInterface;

/**
 * An interstitial controller between raw requests & JSON:API resource objects.
 */
final class JsonapiResourceController {

  /**
   * A class resolver.
   *
   * @var \Drupal\Core\DependencyInjection\ClassResolverInterface
   */
  protected $classResolver;

  /**
   * An argument resolver.
   *
   * @var \Symfony\Component\HttpKernel\Controller\ArgumentResolverInterface
   */
  protected $argumentResolver;

  /**
   * JsonapiResourceController constructor.
   *
   * @param \Drupal\Core\DependencyInjection\ClassResolverInterface $class_resolver
   *   A class resolver to load the appropriate JSON:API resource for the
   *   matched route.
   * @param \Symfony\Component\HttpKernel\Controller\ArgumentResolverInterface $argument_resolver
   *   An argument resolver for resolving the arguments to the loaded JSON:API
   *   resource.
   */
  public function __construct(ClassResolverInterface $class_resolver, ArgumentResolverInterface $argument_resolver) {
    $this->classResolver = $class_resolver;
    $this->argumentResolver = $argument_resolver;
  }

  /**
   * Processes a request and returns a JSON:API ResourceResponse.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object.
   * @param \Drupal\Core\Routing\RouteMatchInterface $current_route
   *   The route matched by the request.
   *
   * @return \Drupal\jsonapi\ResourceResponse
   *   A process JSON:API ResourceResponse.
   */
  public function processRequest(Request $request, RouteMatchInterface $current_route): ResourceResponse {
    $resource = $this->getJsonapiResource($current_route);
    $args = $this->argumentResolver->getArguments($request, [$resource, 'process']);
    // The process() method is guaranteed to exist because
    // \Drupal\jsonapi_resources\Unstable\Routing\ResourceRoutes::ensureResourceImplementationValid()
    // uses reflection to ensure that it does.
    $response = $resource->process(...$args);
    assert($response instanceof ResourceResponse, 'JSON:API resource request processors must return a Drupal\jsonapi\ResourceResponse object.');
    $this->ensureValidResponseDataResourceTypes($response, $request);
    return $response;
  }

  /**
   * Loads a JSON:API Resource from route defaults.
   *
   * @param \Drupal\Core\Routing\RouteMatchInterface $current_route
   *   A matched route.
   *
   * @return \Drupal\jsonapi_resources\Resource\ResourceBase
   *   The JSON:API resource that should be used for processing a request for
   *   the given route.
   */
  protected function getJsonapiResource(RouteMatchInterface $current_route): ResourceBase {
    $definition = $current_route->getRouteObject()->getDefault('_jsonapi_resource');
    $resource = $this->classResolver->getInstanceFromDefinition($definition);
    assert($resource instanceof ResourceBase);
    return $resource;
  }

  /**
   * Ensures that resource object responses contain only declared data.
   *
   * JSON:API resources routes must either declare the `_jsonapi_resource_types`
   * route default or provide their own implementation of
   * \Drupal\jsonapi_resource\Resource\ResourceBase::getRouteResourceTypes().
   * By doing so, modules like JSON:API Schema and OpenAPI will be able to
   * provide accurate schema information. Additionally, this ensures a good DX
   * for client developers because query parameters like `filter` and `include`
   * can be automatically validated.
   *
   * @param \Drupal\jsonapi\ResourceResponse $response
   *   A JSON:API resource response object.
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   A request object.
   *
   * @throws \Drupal\jsonapi_resources\Exception\ResourceImplementationException
   *   Thrown if the response contains resource type data that is not declared
   *   by the resource processor.
   */
  protected function ensureValidResponseDataResourceTypes(ResourceResponse $response, Request $request) {
    $document = $response->getResponseData();
    if ($response->getStatusCode() === 204) {
      if ($document !== NULL) {
        throw new ResourceImplementationException('HTTP 204 responses should not have content.');
      }
    }
    else {
      assert($document instanceof JsonApiDocumentTopLevel);
      $data = $document->getData();
      // Only resource object responses need to be validated.
      if ($data instanceof ResourceObjectData) {
        // Ensure that every object's resource type is declared as a route
        // resource type.
        foreach ($data as $object) {
          $allowed = array_reduce($request->attributes->get('resource_types', []), function ($allowed, ResourceType $resource_type) use ($object) {
            return $allowed ?: $object->getResourceType() === $resource_type;
          }, FALSE);
          if (!$allowed) {
            var_dump(array_keys($request->attributes->get('resource_types', [])));die();
            throw new \LogicException('This resource attempted to serve data that contains unsupported resource type.');
          }
        }
      }
    }
  }

}
