<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Resource;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\jsonapi\Access\EntityAccessChecker;
use Drupal\jsonapi\JsonApiResource\ResourceObject;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi\ResourceType\ResourceType;
use Drupal\jsonapi_resources\Exception\ResourceImplementationException;
use Drupal\jsonapi_resources\Unstable\Entity\EntityCreationTrait;
use Drupal\jsonapi_resources\Unstable\Entity\ResourceObjectToEntityMapperAwareInterface;

/**
 * Defines basic functionality for an entity-oriented JSON:API Resource.
 */
abstract class EntityResourceBase extends ResourceBase implements ResourceObjectToEntityMapperAwareInterface {

  use EntityCreationTrait;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The JSON:API entity access checker.
   *
   * @var \Drupal\jsonapi\Access\EntityAccessChecker
   */
  private $entityAccessChecker;

  /**
   * Sets the entity type manager.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   An entity type manager.
   */
  public function setEntityTypeManager(EntityTypeManagerInterface $entity_type_manager): void {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * Sets the entity access checker.
   *
   * @param \Drupal\jsonapi\Access\EntityAccessChecker $entity_access_checker
   *   An entity access checker.
   */
  public function setEntityAccessChecker(EntityAccessChecker $entity_access_checker): void {
    $this->entityAccessChecker = $entity_access_checker;
  }

  /**
   * Creates a JSON:API resource object from the given entity.
   *
   * @param \Drupal\Core\Entity\EntityInterface $entity
   *   The entity from which to create a resource object.
   * @param bool $check_access
   *   (optional) Whether to check access on the entity or not.
   *
   * @return \Drupal\jsonapi\JsonApiResource\ResourceObjectData
   *   A ResourceObjectData object containing a resource object with a
   *   cardinality of 1. This corresponds to a top-level document's primary
   *   data on an individual response.
   *
   * @see \Drupal\jsonapi_resources\Resource\EntityResourceBase::createResourceObjectFromEntities()
   */
  protected function createIndividualDataFromEntity(EntityInterface $entity, $check_access = TRUE): ResourceObjectData {
    $resource_objects = $this->createCollectionDataFromEntities([$entity], $check_access);
    return new ResourceObjectData($resource_objects->toArray(), 1);
  }

  /**
   * Creates a JSON:API resource object from the given entity.
   *
   * @param \Drupal\Core\Entity\EntityInterface[] $entities
   *   The entities from which to create a resource objects.
   * @param bool $check_access
   *   (optional) Whether to check access on the entities or not. Defaults to
   *   TRUE. Careful consideration should be made whenever passing FALSE. There
   *   are many subtle access checks to consider beyond the entity 'view'
   *   operation. For example, the 'view label' operation and access to the
   *   loaded revision, etc.
   *
   * @return \Drupal\jsonapi\JsonApiResource\ResourceObjectData
   *   A ResourceObjectData object containing a resource object with unlimited
   *   cardinality. This corresponds to a top-level document's primary
   *   data on a collection response.
   */
  protected function createCollectionDataFromEntities(array $entities, $check_access = TRUE): ResourceObjectData {
    if (!$check_access) {
      throw new ResourceImplementationException('It is not yet allowed to create entity-oriented resources that do not check entity access. If this is a requirement for your project, please open a feature request in the issue queue: https://www.drupal.org/project/issues/jsonapi_resources');
    }
    $resource_objects = [];
    foreach ($entities as $entity) {
      $resource_objects[$entity->id()] = $check_access
        ? $this->entityAccessChecker->getAccessCheckedResourceObject($entity)
        : ResourceObject::createFromEntity($this->resourceTypeRepository->get($entity->getEntityTypeId(), $entity->bundle()), $entity);
    }
    return new ResourceObjectData(array_values($resource_objects));
  }

  /**
   * Get all resource types that represent variants of the given entity type ID.
   *
   * @param string $entity_type_id
   *   An entity type ID.
   *
   * @return \Drupal\jsonapi\ResourceType\ResourceType[]
   *   An array of resource types which have the given entity type ID as a base
   *   entity type.
   */
  protected function getResourceTypesByEntityTypeId($entity_type_id) {
    return array_filter($this->resourceTypeRepository->all(), function (ResourceType $type) use ($entity_type_id) {
      return $type->getEntityTypeId() === $entity_type_id;
    });
  }

}
