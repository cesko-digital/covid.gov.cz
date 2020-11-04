<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Entity;

/**
 * Interface indicating that the resource object mapper should be injected.
 *
 * @internal
 */
interface ResourceObjectToEntityMapperAwareInterface {

  /**
   * Sets the resource object to entity mapper.
   *
   * @param \Drupal\jsonapi_resources\Unstable\Entity\ResourceObjectToEntityMapper $mapper
   *   The mapper.
   */
  public function setResourceObjectToEntityMapper(ResourceObjectToEntityMapper $mapper);

}
