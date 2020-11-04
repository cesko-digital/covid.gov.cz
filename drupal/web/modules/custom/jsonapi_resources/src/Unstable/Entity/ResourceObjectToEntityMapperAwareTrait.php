<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Entity;

/**
 * Trait which provides the resource object to entity mapper.
 *
 * @internal
 */
trait ResourceObjectToEntityMapperAwareTrait {

  /**
   * The service which created an entity from a resource object.
   *
   * @var \Drupal\jsonapi_resources\Unstable\Entity\ResourceObjectToEntityMapper
   */
  private $resourceObjectToEntityMapper;

  /**
   * {@inheritdoc}
   *
   * @see \Drupal\jsonapi_resources\Unstable\Entity\ResourceObjectToEntityMapperAwareInterface::setResourceObjectToEntityMapper()
   */
  public function setResourceObjectToEntityMapper(ResourceObjectToEntityMapper $mapper) {
    $this->resourceObjectToEntityMapper = $mapper;
  }

}
