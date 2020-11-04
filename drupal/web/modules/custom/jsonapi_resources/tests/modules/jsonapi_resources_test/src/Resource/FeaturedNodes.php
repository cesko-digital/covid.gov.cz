<?php

namespace Drupal\jsonapi_resources_test\Resource;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\jsonapi\ResourceResponse;
use Drupal\jsonapi_resources\Resource\EntityQueryResourceBase;
use Drupal\node\NodeInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Route;

/**
 * Processes a request for a collection of featured nodes.
 *
 * @internal
 */
final class FeaturedNodes extends EntityQueryResourceBase {

  /**
   * Process the resource request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   *
   * @return \Drupal\jsonapi\ResourceResponse
   *   The response.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function process(Request $request): ResourceResponse {
    $query = $this->getEntityQuery('node')
      ->condition('status', NodeInterface::PUBLISHED)
      ->condition('promote', NodeInterface::PROMOTED);

    $cacheability = new CacheableMetadata();

    $paginator = $this->getPaginatorForRequest($request);
    $paginator->applyToQuery($query, $cacheability);

    $data = $this->loadResourceObjectDataFromEntityQuery($query, $cacheability);

    $pagination_links = $paginator->getPaginationLinks($query, $cacheability);

    return $this->createJsonapiResponse($data, $request, 200, [], $pagination_links);
  }

  /**
   * {@inheritdoc}
   */
  public function getRouteResourceTypes(Route $route, string $route_name): array {
    return $this->getResourceTypesByEntityTypeId('node');
  }

}
