<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Url;
use Drupal\jsonapi\IncludeResolver;
use Drupal\jsonapi\JsonApiResource\IncludedData;
use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi\JsonApiResource\Link;
use Drupal\jsonapi\JsonApiResource\LinkCollection;
use Drupal\jsonapi\JsonApiResource\NullIncludedData;
use Drupal\jsonapi\JsonApiResource\ResourceObject;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi\ResourceResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Creates JSON:API response objects.
 *
 * @internal
 *   Do not use this factory directly. Use
 *   \Drupal\jsonapi\Resource\ResourceBase::createJsonapiResponse() instead.
 */
final class ResourceResponseFactory {

  /**
   * The include resolver.
   *
   * @var \Drupal\jsonapi\IncludeResolver
   */
  protected $includeResolver;

  /**
   * ResourceResponseFactory constructor.
   *
   * @param \Drupal\jsonapi\IncludeResolver $include_resolver
   *   The include resolver.
   */
  public function __construct(IncludeResolver $include_resolver) {
    $this->includeResolver = $include_resolver;
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
  public function create(ResourceObjectData $data, Request $request, $response_code = 200, array $headers = [], LinkCollection $links = NULL, array $meta = []) {
    $links = ($links ?: new LinkCollection([]));
    if (!$links->hasLinkWithKey('self')) {
      $self_link = new Link(new CacheableMetadata(), Url::fromUri($request->getUri()), 'self');
      $links = $links->withLink('self', $self_link);
    }

    $includes = $this->getIncludes($request, $data);

    $response = new ResourceResponse(new JsonApiDocumentTopLevel($data, $includes, $links, $meta), $response_code, $headers);
    // Make sure that different sparse fieldsets are cached differently.
    $cache_contexts[] = 'url.query_args:fields';
    // Make sure that different sets of includes are cached differently.
    $cache_contexts[] = 'url.query_args:include';
    $cacheability = (new CacheableMetadata())->addCacheContexts($cache_contexts);
    $response->addCacheableDependency($cacheability);
    return $response;
  }

  /**
   * Gets includes for the given response data.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object.
   * @param \Drupal\jsonapi\JsonApiResource\ResourceObject|\Drupal\jsonapi\JsonApiResource\ResourceObjectData $data
   *   The response data from which to resolve includes.
   *
   * @return \Drupal\jsonapi\JsonApiResource\IncludedData
   *   A Data object to be included or a NullData object if the request does not
   *   specify any include paths.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  private function getIncludes(Request $request, $data): IncludedData {
    assert($data instanceof ResourceObject || $data instanceof ResourceObjectData);
    return $request->query->has('include') && ($include_parameter = $request->query->get('include')) && !empty($include_parameter)
      ? $this->includeResolver->resolve($data, $include_parameter)
      : new NullIncludedData();
  }

}
