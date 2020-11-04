<?php

namespace Drupal\jsonapi_resources_test\Resource;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\jsonapi\ResourceResponse;
use Drupal\jsonapi_resources\Resource\EntityQueryResourceBase;
use Drupal\node\NodeInterface;
use Drupal\user\UserInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Processes a request for a collection containing a user's article nodes.
 *
 * @internal
 */
class AuthorArticles extends EntityQueryResourceBase {

  /**
   * Process the resource request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param \Drupal\user\UserInterface $user
   *   The user.
   *
   * @return \Drupal\jsonapi\ResourceResponse
   *   The response.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function process(Request $request, UserInterface $user): ResourceResponse {
    // Force the author to be included.
    $include = $request->query->get('include');
    $request->query->set('include', $include . (empty($include) ? '' : ',') . 'uid');

    $cacheability = new CacheableMetadata();

    $entity_type = $this->entityTypeManager->getDefinition('node');
    $entity_query = $this->getEntityQuery('node')
      ->condition($entity_type->getKey('bundle'), 'article')
      ->condition($entity_type->getKey('status'), NodeInterface::PUBLISHED)
      ->condition($entity_type->getKey('uid'), $user->id());
    $cacheability->addCacheContexts(['url.path']);

    $paginator = $this->getPaginatorForRequest($request);
    $paginator->applyToQuery($entity_query, $cacheability);

    $data = $this->loadResourceObjectDataFromEntityQuery($entity_query, $cacheability);

    $pagination_links = $paginator->getPaginationLinks($entity_query, $cacheability, TRUE);

    $response = $this->createJsonapiResponse($data, $request, 200, [], $pagination_links);
    $response->addCacheableDependency($cacheability);

    return $response;
  }

}
