<?php declare(strict_types = 1);

namespace Drupal\covid\Plugin\jsonapi_hypermedia\LinkProvider;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Url;
use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi_hypermedia\AccessRestrictedLink;
use Drupal\jsonapi_hypermedia\Plugin\LinkProviderBase;

/**
 * Class CollectionTopLevelSchemaLinkProvider.
 *
 * @JsonapiHypermediaLinkProvider(
 *   id = "covid.redirects",
 *   link_relation_type = "redirects",
 *   link_context = {
 *     "top_level_object" = "entrypoint",
 *   },
 * )
 *
 * @internal
 */
final class RedirectsLinkProvider extends LinkProviderBase {

  /**
   * {@inheritdoc}
   */
  public function getLink($context) {
    assert($context instanceof JsonApiDocumentTopLevel);
    return AccessRestrictedLink::createLink(AccessResult::allowed(), new CacheableMetadata(), new Url('covid.redirects'), $this->getLinkRelationType());
  }

}
