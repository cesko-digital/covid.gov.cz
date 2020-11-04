<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Entity\Query;

use Drupal\Core\Cache\RefinableCacheableDependencyInterface;
use Drupal\Core\Entity\Query\QueryInterface;
use Drupal\Core\Render\RenderContext;
use Drupal\Core\Render\RendererInterface;
use Drupal\jsonapi_resources\Entity\Query\PaginatorMetadata;

/**
 * Executes entity queries and captures cacheability.
 */
final class CacheabilityCapturingExecutor {

  /**
   * A renderer.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * EntityQueryExecutor constructor.
   *
   * @param \Drupal\Core\Render\RendererInterface $renderer
   *   A renderer.
   */
  public function __construct(RendererInterface $renderer) {
    $this->renderer = $renderer;
  }

  /**
   * Executes the query in a render context, to catch bubbled cacheability.
   *
   * @param \Drupal\Core\Entity\Query\QueryInterface $query
   *   The query to execute to get the return results.
   * @param \Drupal\Core\Cache\RefinableCacheableDependencyInterface $cacheable_metadata
   *   An refinable cacheable dependency with which to capture cacheability.
   *
   * @return int|array
   *   Returns an integer for count queries or an array of IDs. The values of
   *   the array are always entity IDs. The keys will be revision IDs if the
   *   entity supports revision and entity IDs if not.
   *
   * @see node_query_node_access_alter()
   * @see https://www.drupal.org/project/drupal/issues/2557815
   * @see https://www.drupal.org/project/drupal/issues/2794385
   * @todo Remove this after https://www.drupal.org/project/drupal/issues/3028976 is fixed.
   */
  public function executeQueryAndCaptureCacheability(QueryInterface $query, RefinableCacheableDependencyInterface $cacheable_metadata) {
    $context = new RenderContext();
    $results = $this->renderer->executeInRenderContext($context, function () use ($query) {
      return $query->execute();
    });
    $paginator_metadata = $query->getMetaData(PaginatorMetadata::KEY);
    if (is_array($results) && $paginator_metadata instanceof PaginatorMetadata && count($results) > (int) $paginator_metadata->pageSizeMax) {
      $paginator_metadata->hasNextPage = TRUE;
      array_pop($results);
    }
    if (!$context->isEmpty()) {
      $cacheable_metadata->addCacheableDependency($context->pop());
    }
    return $results;
  }

}
