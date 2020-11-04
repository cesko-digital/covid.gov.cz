<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Resource;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Entity\Query\QueryInterface;
use Drupal\Core\Entity\RevisionableStorageInterface;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi_resources\Unstable\Entity\Query\CacheabilityCapturingExecutor;
use Drupal\jsonapi_resources\Unstable\Entity\Query\Pagination\OffsetLimitPaginator;
use Drupal\jsonapi_resources\Entity\Query\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Defines basic functionality for an entity query-oriented JSON:API Resource.
 */
abstract class EntityQueryResourceBase extends EntityResourceBase {

  /**
   * The entity query executor utility.
   *
   * @var \Drupal\jsonapi_resources\Unstable\Entity\Query\CacheabilityCapturingExecutor
   */
  private $entityQueryExecutor;

  /**
   * Sets the cacheability capturing entity query executor.
   *
   * @param \Drupal\jsonapi_resources\Unstable\Entity\Query\CacheabilityCapturingExecutor $entity_query_executor
   *   The entity query executor utility.
   */
  public function setCacheabilityCapturingExecutor(CacheabilityCapturingExecutor $entity_query_executor) {
    $this->entityQueryExecutor = $entity_query_executor;
  }

  /**
   * Gets an entity query for the given entity type.
   *
   * @param string $entity_type_id
   *   The entity type ID for the entity query.
   *
   * @return \Drupal\Core\Entity\Query\QueryInterface
   *   An entity query.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  protected function getEntityQuery($entity_type_id) {
    return $this->entityTypeManager->getStorage($entity_type_id)->getQuery();
  }

  /**
   * Gets an entity query paginator for the current request.
   *
   * Currently, this will always returns an OffsetLimitPaginator, but it's
   * possible that it may return other paginator types in the future. Such as a
   * cursor-based paginator.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object.
   *
   * @return \Drupal\jsonapi_resources\Entity\Query\PaginatorInterface
   *   A paginator for the request.
   */
  protected function getPaginatorForRequest(Request $request): PaginatorInterface {
    return OffsetLimitPaginator::create($request, $this->entityQueryExecutor);
  }

  /**
   * Finds entity resource object using an entity query.
   *
   * @param \Drupal\Core\Entity\Query\QueryInterface $entity_query
   *   The entity query object.
   * @param \Drupal\Core\Cache\CacheableMetadata $cacheable_metadata
   *   A CacheableMetadata object that will be used to capture any cacheability
   *   information generated while generating pagination links. The same object
   *   that is passed to this method should be added to the cacheability of the
   *   final response by the caller.
   * @param bool $load_latest_revisions
   *   (optional) Whether to load the latest revisions instead of the defaults.
   *   Defaults to FALSE.
   * @param bool $check_access
   *   (optional) Whether to check access on the loaded entities or not.
   *   Defaults to TRUE.
   *
   * @return \Drupal\jsonapi\JsonApiResource\ResourceObjectData
   *   The resource object data that was found and access checked.
   *
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   *   Thrown if the entity type doesn't exist.
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   *   Thrown if the storage handler couldn't be loaded.
   */
  protected function loadResourceObjectDataFromEntityQuery(QueryInterface $entity_query, CacheableMetadata $cacheable_metadata, $load_latest_revisions = FALSE, $check_access = TRUE): ResourceObjectData {
    $entity_type_id = $entity_query->getEntityTypeId();
    $results = $this->entityQueryExecutor->executeQueryAndCaptureCacheability($entity_query, $cacheable_metadata);
    return $this->loadResourceObjectsByEntityIds($entity_type_id, $results, $load_latest_revisions, $check_access);
  }

  /**
   * Loads and access checks entities loaded by ID as JSON:API resource objects.
   *
   * @param string $entity_type_id
   *   The entity type ID of the entities to load.
   * @param int[] $ids
   *   An array of entity IDs, keyed by revision ID if the entity type is
   *   revisionable.
   * @param bool $load_latest_revisions
   *   (optional) Whether to load the latest revisions instead of the defaults.
   *   Defaults to FALSE.
   * @param bool $check_access
   *   (optional) Whether to check access on the loaded entities or not.
   *   Defaults to TRUE.
   *
   * @return \Drupal\jsonapi\JsonApiResource\ResourceObjectData
   *   A ResourceObjectData object containing a resource object with unlimited
   *   cardinality. This corresponds to a top-level document's primary
   *   data on a collection response.
   *
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   *   Thrown if the entity type doesn't exist.
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   *   Thrown if the storage handler couldn't be loaded.
   */
  private function loadResourceObjectsByEntityIds($entity_type_id, array $ids, $load_latest_revisions = FALSE, $check_access = TRUE): ResourceObjectData {
    $storage = $this->entityTypeManager->getStorage($entity_type_id);
    if ($load_latest_revisions) {
      assert($storage instanceof RevisionableStorageInterface);
      $entities = $storage->loadMultipleRevisions(array_keys($ids));
    }
    else {
      $entities = $storage->loadMultiple($ids);
    }
    return $this->createCollectionDataFromEntities($entities, $check_access);
  }

}
