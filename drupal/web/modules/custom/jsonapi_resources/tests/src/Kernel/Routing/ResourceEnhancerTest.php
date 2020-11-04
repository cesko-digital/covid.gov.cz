<?php declare(strict_types = 1);

namespace Drupal\Tests\jsonapi_resources\Kernel;

use Drupal\jsonapi_resources\Unstable\Routing\Enhancer\ResourceEnhancer;
use Drupal\KernelTests\KernelTestBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Route;

/**
 * @coversDefaultClass \Drupal\jsonapi_resources\Unstable\Routing\Enhancer\ResourceEnhancer
 * @group jsonapi_resources
 */
final class ResourceEnhancerTest extends KernelTestBase {

  /**
   * {@inheritdoc}
   */
  protected static $modules = [
    'serialization',
    'jsonapi',
    'jsonapi_resources',
  ];

  /**
   * Test route enhancement.
   */
  public function testEnhance() {
    $resource_enhancer = new ResourceEnhancer(
      $this->container->get('class_resolver'),
      $this->container->get('current_route_match')
    );

    $route_object = new Route('/resource');
    $route_defaults = [
      '_jsonapi_resource' => '\\Drupal\\jsonapi_resources_test\\Resource\\AuthorArticles',
      '_route_object' => $route_object,
      '_route' => 'jsonapi_resource_test_route',
    ];
    $enhanced_defaults = $resource_enhancer->enhance($route_defaults, Request::createFromGlobals());
    $this->assertSame($enhanced_defaults['_controller'], 'controller.jsonapi_resource:processRequest');

    // Ensure that the enhancer ignores routes that already have a controller
    // defined.
    $route_defaults = [
      '_controller' => '\\Drupal\\mymodule\\Controller\\Doesnt::exist',
    ];
    $enhanced_defaults = $resource_enhancer->enhance($route_defaults, Request::createFromGlobals());
    $this->assertSame($enhanced_defaults['_controller'], $route_defaults['_controller']);
  }

}
