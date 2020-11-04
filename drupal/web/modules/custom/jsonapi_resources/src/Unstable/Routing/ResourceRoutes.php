<?php

namespace Drupal\jsonapi_resources\Unstable\Routing;

use Drupal\Core\Routing\RouteBuildEvent;
use Drupal\Core\Routing\RoutingEvents;
use Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface;
use Drupal\jsonapi\Routing\Routes as JsonapiRoutes;
use Drupal\jsonapi_resources\Exception\ResourceImplementationException;
use Drupal\jsonapi_resources\Exception\RouteDefinitionException;
use Drupal\jsonapi_resources\Resource\ResourceBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Route;

/**
 * Route subscriber to decorate JSON:API Resource routes.
 */
final class ResourceRoutes implements EventSubscriberInterface {

  /**
   * The JSON:API resource type repository.
   *
   * @var \Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface
   */
  protected $resourceTypeRepository;

  /**
   * List of providers.
   *
   * @var string[]
   */
  protected $providerIds;

  /**
   * The JSON:API base path.
   *
   * @var string
   */
  protected $jsonApiBasePath;

  /**
   * Container instance used to validate _jsonapi_resource route definitions.
   *
   * @var \Symfony\Component\DependencyInjection\ContainerInterface
   */
  protected $container;

  /**
   * Instantiates a Routes object.
   *
   * @param \Drupal\jsonapi\ResourceType\ResourceTypeRepositoryInterface $resource_type_repository
   *   The JSON:API resource type repository.
   * @param string[] $authentication_providers
   *   The authentication providers, keyed by ID.
   * @param string $jsonapi_base_path
   *   The JSON:API base path.
   * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
   *   A container instance.
   */
  public function __construct(ResourceTypeRepositoryInterface $resource_type_repository, array $authentication_providers, $jsonapi_base_path, ContainerInterface $container) {
    $this->resourceTypeRepository = $resource_type_repository;
    $this->providerIds = array_keys($authentication_providers);
    $this->jsonApiBasePath = $jsonapi_base_path;
    $this->container = $container;
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    // Run before route_http_method_subscriber, so that we can ensure JSON:API
    // Resource routes default to only GET methods if not set.
    $events[RoutingEvents::ALTER][] = ['decorateJsonapiResourceRoutes', 6000];
    return $events;
  }

  /**
   * Decorates JSON:API Resource routes.
   *
   * @param \Drupal\Core\Routing\RouteBuildEvent $event
   *   The route rebuild event.
   */
  public function decorateJsonapiResourceRoutes(RouteBuildEvent $event) {
    $route_collection = $event->getRouteCollection();
    foreach ($route_collection as $route_name => $route) {
      if ($route->getDefault('_jsonapi_resource') === NULL) {
        continue;
      }

      // Ensure that the declared implementation is valid.
      $this->ensureResourceImplementationValid($route_name, $route);

      // Replace the %jsonapi% placeholder with the JSON:API base path.
      $path_segments = array_slice(explode('/', $route->getPath()), 1);
      assert(isset($path_segments[0]) && $path_segments[0] === '%jsonapi%');
      $path_segments[0] = $this->jsonApiBasePath;
      $route->setPath(implode('/', $path_segments));
      $route->addRequirements([
        // Require the JSON:API media type header on every route.
        '_content_type_format' => 'api_json',
        // All routes serve only the JSON:API media type.
        '_format' => 'api_json',
      ]);

      // Enable all available authentication providers.
      $route->addOptions(['_auth' => $this->providerIds]);
      // Flag every route as belonging to the JSON:API module.
      $route->addDefaults([JsonapiRoutes::JSON_API_ROUTE_FLAG_KEY => TRUE]);

      $methods = $route->getMethods();
      if (empty($methods)) {
        $route->setMethods(['GET']);
      }
    }
  }

  /**
   * Checks whether $definition identifies a valid JSON:API resource.
   *
   * The purpose of this method is to anticipate developer mistakes and provide
   * actionable errors. This also provides guarantees for code that is run
   * during request processing (e.g. that the `process()` method exists). Doing
   * so means errors are surfaced during development instead of as production
   * errors visible to an API client.
   *
   * @param string $route_name
   *   The name of the route to validate.
   * @param \Symfony\Component\Routing\Route $route
   *   The route object to validate.
   *
   * @throws \Drupal\jsonapi_resources\Exception\RouteDefinitionException
   *   Thrown if a JSON:API resource route definition is invalid.
   * @throws \Drupal\jsonapi_resources\Exception\ResourceImplementationException
   *   Thrown if a JSON:API resource class is improperly implemented.
   */
  protected function ensureResourceImplementationValid($route_name, Route $route) {
    $resource_name = $route->getDefault('_jsonapi_resource');
    if ($this->container->has($resource_name)) {
      $instance = $this->container->get($resource_name);
      $implementation_class = get_class($instance);
    }
    elseif (strpos($resource_name, '\\') !== FALSE) {
      $implementation_class = $resource_name;
    }
    else {
      throw new RouteDefinitionException("The $resource_name service, used by the the $route_name route, does not exist.");
    }

    try {
      $reflection = new \ReflectionClass($implementation_class);
    }
    catch (\ReflectionException $e) {
      throw new RouteDefinitionException("The $resource_name class, used by the the $route_name route, does not exist.");
    }

    $jsonapi_resource_base_class = ResourceBase::class;
    $implements_interface = $reflection->isSubclassOf(ResourceBase::class);
    if (!$implements_interface) {
      throw new ResourceImplementationException("$resource_name, used by the the $route_name route, must extend $jsonapi_resource_base_class.");
    }

    try {
      $implements_public_process_method = $reflection->getMethod('process')->isPublic();
    }
    catch (\ReflectionException $e) {
      throw new ResourceImplementationException("$resource_name, used by the the $route_name route, must declare a public process() method.");
    }
    if (!$implements_public_process_method) {
      throw new ResourceImplementationException("$resource_name, used by the the $route_name route, declares a process() method but it must be public.");
    }

    // JSON:API resource routes must not define a custom controller.
    if ($route->getDefault('_controller')) {
      throw new RouteDefinitionException("The $route_name route definition must not declare a _controller route default when the _jsonapi_resource route default is declared.");
    }

    // Routes that only support DELETE will return HTTP 204 and have no response
    // content, so do not validate _jsonapi_resource_types.
    if ($route->getMethods() === ['DELETE']) {
      return;
    }
    if (!$route->hasDefault('_jsonapi_resource_types')) {
      $method_name = 'getRouteResourceTypes';
      try {
        $declaring_class = $reflection->getMethod($method_name)->getDeclaringClass();
        $base_class_name = ResourceBase::class;
        if ($declaring_class->getName() === $base_class_name) {
          throw new RouteDefinitionException("$resource_name, used by the the $route_name route, must override $base_class_name::getRouteResourceTypes() or _jsonapi_resource_types must be defined as a route default.");
        }
      }
      catch (\ReflectionException $e) {
        assert(FALSE, "It should be impossible to reach this state because the code above already ensured that the resource class declares a $method_name() method since it extends $jsonapi_resource_base_class.");
      }
    }
    elseif (!is_array($route->getDefault('_jsonapi_resource_types'))) {
      throw new RouteDefinitionException("The $route_name route definition's _jsonapi_resource_types route default must be an array.");
    }
    elseif (empty($route->getDefault('_jsonapi_resource_types'))) {
      throw new RouteDefinitionException("The $route_name route definition's _jsonapi_resource_types route default must declare at least one resource type.");
    }

    // Ensure that every JSON:API resource path begins with `/%jsonapi%` so the
    // JSON:API base path can be substituted in its place.
    $path_segments = array_slice(explode('/', $route->getPath()), 1);
    $prefix = $path_segments[0] ?? NULL;
    if ($prefix !== '%jsonapi%') {
      throw new RouteDefinitionException("The $route_name route definition's path, `{$route->getPath()}`, must begin with `/%jsonapi%` so that the JSON:API base path can be substituted in its place.");
    }
  }

}
