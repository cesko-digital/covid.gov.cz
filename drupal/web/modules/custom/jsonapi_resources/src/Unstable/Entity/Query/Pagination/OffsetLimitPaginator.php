<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Entity\Query\Pagination;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Entity\Query\QueryInterface;
use Drupal\Core\Http\Exception\CacheableBadRequestHttpException;
use Drupal\Core\Url;
use Drupal\jsonapi\JsonApiResource\Link;
use Drupal\jsonapi\JsonApiResource\LinkCollection;
use Drupal\jsonapi\Query\OffsetPage;
use Drupal\jsonapi_resources\Entity\Query\PaginatorInterface;
use Drupal\jsonapi_resources\Entity\Query\PaginatorMetadata;
use Drupal\jsonapi_resources\Unstable\Entity\Query\CacheabilityCapturingExecutor;
use Symfony\Component\HttpFoundation\Request;

/**
 * A paginator for handling offset-limit pagination in JSON:API request.
 *
 * @internal
 *   This class should never be instantiated directly. Use
 *   EntityQueryResourceBase::getPaginatorForRequest() instead.
 */
final class OffsetLimitPaginator implements PaginatorInterface {

  /**
   * The request object which may have a `page` query parameter.
   *
   * @var \Symfony\Component\HttpFoundation\Request
   */
  protected $request;

  /**
   * The cacheability capturing entity query executor.
   *
   * @var \Drupal\jsonapi_resources\Unstable\Entity\Query\CacheabilityCapturingExecutor
   */
  protected $entityQueryExecutor;

  /**
   * OffsetPagerQueryModifier constructor.
   *
   * This is protected by design. Use static::create() instead.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object which may have a `page` query parameter.
   * @param \Drupal\jsonapi_resources\Unstable\Entity\Query\CacheabilityCapturingExecutor $entity_query_executor
   *   The cacheability capturing entity query executor.
   */
  protected function __construct(Request $request, CacheabilityCapturingExecutor $entity_query_executor) {
    $this->request = $request;
    $this->entityQueryExecutor = $entity_query_executor;
  }

  /**
   * Creates a new entity query modifier to handle offset pagination.
   *
   * This method should never be called directly. Use
   * \Drupal\jsonapi_resources\Resource\EntityQueryResourceBase::getPaginatorForRequest()
   * instead.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object which may have a `page` query parameter.
   * @param \Drupal\jsonapi_resources\Unstable\Entity\Query\CacheabilityCapturingExecutor $entity_query_executor
   *   The cacheability capturing entity query executor.
   *
   * @return static
   *   An offset paginator modifier derived from the request.
   *
   * @see \Drupal\jsonapi_resources\Resource\EntityQueryResourceBase::getPaginatorForRequest()
   */
  public static function create(Request $request, CacheabilityCapturingExecutor $entity_query_executor) {
    return new static($request, $entity_query_executor);
  }

  /**
   * {@inheritdoc}
   */
  public function applyToQuery(QueryInterface $query, CacheableMetadata $cacheable_metadata): void {
    // Ensure that different pages will be cached separately.
    $cacheable_metadata->addCacheContexts(['url.query_args:page']);
    // Derive any pagination options from the query params or use defaults.
    $pagination = $this->request->query->has('page')
      ? OffsetPage::createFromQueryParameter($this->request->query->get('page'))
      : new OffsetPage(OffsetPage::DEFAULT_OFFSET, OffsetPage::SIZE_MAX);
    $query->range($pagination->getOffset(), $pagination->getSize() + 1);
    $metadata = new PaginatorMetadata();
    $metadata->pageSizeMax = $pagination->getSize();
    $metadata->pageLocation = $pagination->getOffset();
    $query->addMetaData(PaginatorMetadata::KEY, $metadata);
  }

  /**
   * {@inheritdoc}
   */
  public function getPaginationLinks(QueryInterface $executed_query, CacheableMetadata $cacheable_metadata, $calculate_last_link = FALSE): LinkCollection {
    $paginator_metadata = $executed_query->getMetaData(PaginatorMetadata::KEY);
    assert($paginator_metadata instanceof PaginatorMetadata);
    $has_next_page = !empty($paginator_metadata->hasNextPage);
    if ($calculate_last_link && $has_next_page) {
      $count_query = $executed_query->range(NULL, NULL)->count();
      $total_count = (int) $this->entityQueryExecutor->executeQueryAndCaptureCacheability($count_query, $cacheable_metadata);
      if (empty($total_count)) {
        return new LinkCollection([]);
      }
    }
    $pager_links = new LinkCollection([]);
    /* @var \Drupal\jsonapi\Query\OffsetPage $page_param */
    $offset = $paginator_metadata->pageLocation;
    $size = $paginator_metadata->pageSizeMax;
    if ($size <= 0) {
      $cacheability = (new CacheableMetadata())->addCacheContexts(['url.query_args:page']);
      throw new CacheableBadRequestHttpException($cacheability, sprintf('The page size needs to be a positive integer.'));
    }
    $query = (array) $this->request->query->getIterator();
    // Check if this is not the last page.
    if ($has_next_page) {
      $next_url = static::getRequestLink($this->request, static::getPagerQueries('next', $offset, $size, $query));
      $pager_links = $pager_links->withLink('next', new Link(new CacheableMetadata(), $next_url, 'next'));

      if (!empty($total_count)) {
        $last_url = static::getRequestLink($this->request, static::getPagerQueries('last', $offset, $size, $query, $total_count));
        $pager_links = $pager_links->withLink('last', new Link(new CacheableMetadata(), $last_url, 'last'));
      }
    }

    // Check if this is not the first page.
    if ($offset > 0) {
      $first_url = static::getRequestLink($this->request, static::getPagerQueries('first', $offset, $size, $query));
      $pager_links = $pager_links->withLink('first', new Link(new CacheableMetadata(), $first_url, 'first'));
      $prev_url = static::getRequestLink($this->request, static::getPagerQueries('prev', $offset, $size, $query));
      $pager_links = $pager_links->withLink('prev', new Link(new CacheableMetadata(), $prev_url, 'prev'));
    }

    return $pager_links;
  }

  /**
   * Get the query param array.
   *
   * @param string $link_id
   *   The name of the pagination link requested.
   * @param int $offset
   *   The starting index.
   * @param int $size
   *   The pagination page size.
   * @param array $query
   *   The query parameters.
   * @param int $total
   *   The total size of the collection.
   *
   * @return array
   *   The pagination query param array.
   */
  protected static function getPagerQueries($link_id, $offset, $size, array $query = [], $total = 0) {
    $extra_query = [];
    switch ($link_id) {
      case 'next':
        $extra_query = [
          'page' => [
            'offset' => $offset + $size,
            'limit' => $size,
          ],
        ];
        break;

      case 'first':
        $extra_query = [
          'page' => [
            'offset' => 0,
            'limit' => $size,
          ],
        ];
        break;

      case 'last':
        if ($total) {
          $extra_query = [
            'page' => [
              'offset' => (ceil($total / $size) - 1) * $size,
              'limit' => $size,
            ],
          ];
        }
        break;

      case 'prev':
        $extra_query = [
          'page' => [
            'offset' => max($offset - $size, 0),
            'limit' => $size,
          ],
        ];
        break;
    }
    return array_merge($query, $extra_query);
  }

  /**
   * Get the full URL for a given request object.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object.
   * @param array|null $query
   *   The query parameters to use. Leave it empty to get the query from the
   *   request object.
   *
   * @return \Drupal\Core\Url
   *   The full URL.
   */
  protected static function getRequestLink(Request $request, $query = NULL) {
    if ($query === NULL) {
      return Url::fromUri($request->getUri());
    }

    $uri_without_query_string = $request->getSchemeAndHttpHost() . $request->getBaseUrl() . $request->getPathInfo();
    return Url::fromUri($uri_without_query_string)->setOption('query', $query);
  }

}
