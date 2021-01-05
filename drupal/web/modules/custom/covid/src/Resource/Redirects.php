<?php

namespace Drupal\covid\Resource;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Url;
use Drupal\jsonapi\JsonApiResource\LinkCollection;
use Drupal\jsonapi\JsonApiResource\ResourceObject;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi\ResourceResponse;
use Drupal\jsonapi\ResourceType\ResourceType;
use Drupal\jsonapi_resources\Resource\EntityQueryResourceBase;
use Drupal\redirect\Entity\Redirect;
use Symfony\Component\HttpFoundation\Request;

/**
 * Processes a request for a collection of featured nodes.
 *
 * @internal
 */
final class Redirects extends EntityQueryResourceBase {

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
  public function process(Request $request, array $resource_types): ResourceResponse {
    $entity_type_id = 'redirect';
    $query = $this->getEntityQuery($entity_type_id);

    $cacheability = new CacheableMetadata();

    $paginator = $this->getPaginatorForRequest($request);
//    $paginator->applyToQuery($query, $cacheability);

    $redirectIds = $query->execute();
    /** @var Redirect[] $redirects */
    $redirects = $this->entityTypeManager->getStorage($entity_type_id)
      ->loadMultiple($redirectIds);

    $resourceObjects = [];
    foreach ($redirects as $redirect) {
      $resourceObject = $this->transform($redirect, reset($resource_types));
      $cacheability->addCacheableDependency($resourceObject);
      $resourceObjects[] = $resourceObject;
    }
    $data = new ResourceObjectData($resourceObjects);

    $pagination_links = $paginator->getPaginationLinks($query, $cacheability);

    return $this->createJsonapiResponse($data, $request, 200, [], $pagination_links);
  }

  private function transform(Redirect $redirect, ResourceType $type): ResourceObject {
    $cacheability = new CacheableMetadata();
    $cacheability->addCacheableDependency($redirect);
    $links = new LinkCollection([]);
    $language = $redirect->language();
    $redirect_from = Url::fromUserInput($redirect->getSourceUrl(), [
      'language' => $language,
    ])->toString(TRUE);
    $redirect_uri = $redirect->getRedirectUrl()->toString(TRUE);
    $redirect_to = Url::fromUserInput($redirect_uri->getGeneratedUrl(), [
      'language' => $language,
    ])->toString(TRUE);
    $langcode = $language->isDefault() ? '' : '/en';

    $cacheability->addCacheableDependency($redirect_from)
      ->addCacheableDependency($redirect_to)
      ->addCacheableDependency($language)
      ->addCacheableDependency($redirect_uri);

    return new ResourceObject(
      $cacheability,
      $type,
      $redirect->uuid(),
      NULL, [
      'drupal_internal__rid' => $redirect->id(),
      'redirect_from' => $langcode . $redirect_from->getGeneratedUrl(),
      'redirect_to' => $redirect_to->getGeneratedUrl(),
      'language' => $language->getId(),
      'status_code' => $redirect->getStatusCode(),
    ],
      $links
    );
  }

}
