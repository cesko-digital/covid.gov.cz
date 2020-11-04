<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Routing\Enhancer;

use Drupal\Core\DependencyInjection\ClassResolverInterface;
use Drupal\Core\Routing\EnhancerInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\jsonapi_resources\Resource\ResourceBase;
use Symfony\Component\HttpFoundation\Request;

/**
 * Route enhancer for JSON:API Resource routes.
 */
final class ResourceEnhancer implements EnhancerInterface {

  /**
   * A class resolver.
   *
   * @var \Drupal\Core\DependencyInjection\ClassResolverInterface
   */
  protected $classResolver;

  /**
   * The current route match.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  protected $routeMatch;

  /**
   * ResourceEnhancer constructor.
   *
   * @param \Drupal\Core\DependencyInjection\ClassResolverInterface $class_resolver
   *   A class resolver to load the appropriate JSON:API resource for the
   *   matched route.
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The route matched by the request.
   */
  public function __construct(ClassResolverInterface $class_resolver, RouteMatchInterface $route_match) {
    $this->classResolver = $class_resolver;
    $this->routeMatch = $route_match;
  }

  /**
   * {@inheritdoc}
   */
  public function enhance(array $defaults, Request $request) {
    if (!isset($defaults['_jsonapi_resource'])) {
      return $defaults;
    }
    $defaults['_controller'] = 'controller.jsonapi_resource:processRequest';
    if (!isset($defaults['resource_types'])) {
      $resource = $this->classResolver->getInstanceFromDefinition($defaults['_jsonapi_resource']);
      assert($resource instanceof ResourceBase);
      $defaults['resource_types'] = $resource->getRouteResourceTypes($defaults['_route_object'], $defaults['_route']);
    }
    return $defaults;
  }

}
