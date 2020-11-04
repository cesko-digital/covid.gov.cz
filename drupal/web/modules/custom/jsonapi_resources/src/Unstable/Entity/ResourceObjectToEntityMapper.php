<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Entity;

use Drupal\Core\Config\Entity\ConfigEntityInterface;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\jsonapi\JsonApiResource\ResourceObject;
use Drupal\jsonapi\Serializer\Serializer;
use Symfony\Component\HttpKernel\Exception\HttpException;

/**
 * Service which maps a resource object into an entity.
 *
 * This class acts as an intermediary between JSON:API's serializer (which is
 * internal) and the public API of this module. The JSON:API serializer may be
 * phased out of Drupal core.
 *
 * @internal
 *   Do not use this class. It is for internal use and will be phased out when
 *   core support for similar behavior exists.
 *
 * @see \Drupal\jsonapi\Normalizer\ContentEntityDenormalizer
 */
final class ResourceObjectToEntityMapper {

  /**
   * The JSON:API serializer.
   *
   * @var \Drupal\jsonapi\Serializer\Serializer
   */
  protected $serializer;

  /**
   * Constructs an EntityDenormalizerBase object.
   *
   * @param \Drupal\jsonapi\Serializer\Serializer $serializer
   *   The JSON:API serializer. Concrete type hint is intentional.
   */
  public function __construct(Serializer $serializer) {
    $this->serializer = $serializer;
  }

  /**
   * Creates a new entity from the given resource object.
   *
   * @param \Drupal\jsonapi\JsonApiResource\ResourceObject $resource_object
   *   The resource object from which to create a new entity.
   *
   * @return \Drupal\Core\Entity\EntityInterface
   *   The newly created entity.
   */
  public function createEntityFromResourceObject(ResourceObject $resource_object) {
    return $this->mapResourceObjectToEntity($resource_object);
  }

  /**
   * Builds an array of values to use to create an entity.
   *
   * @param \Drupal\jsonapi\JsonApiResource\ResourceObject $resource_object
   *   The resource object from which to map values.
   *
   * @return \Drupal\Core\Entity\ContentEntityInterface
   *   A new entity created from a resource object.
   *
   * @throws \UnexpectedValueException
   *   Thrown when the resource object does not represent an entity.
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Thrown when the resource object represents a config entity.
   *
   * @see \Drupal\Core\Entity\EntityStorageInterface::create()
   */
  protected function mapResourceObjectToEntity(ResourceObject $resource_object): EntityInterface {
    $target_class = $resource_object->getResourceType()->getDeserializationTargetClass();
    if (in_array(ContentEntityInterface::class, class_implements($target_class, TRUE) ?: [])) {
      return $this->mapResourceObjectToContentEntity($resource_object);
    }
    elseif (in_array(ConfigEntityInterface::class, class_implements($target_class, TRUE) ?: [])) {
      throw new HttpException(501, 'The JSON:API Resources module does not yet support config entity mutation.');
    }
    else {
      throw new \UnexpectedValueException('The given resource object does not represent a content or config entity.');
    }
  }

  /**
   * Builds an array of values to use to create a content entity.
   *
   * Copied from JSON:API code. Modify with extreme care.
   *
   * @param \Drupal\jsonapi\JsonApiResource\ResourceObject $resource_object
   *   The resource object from which to create a new entity.
   *
   * @return \Drupal\Core\Entity\ContentEntityInterface
   *   A new entity created from a resource object.
   *
   * @see \Drupal\jsonapi\Normalizer\ContentEntityDenormalizer::prepareInput()
   */
  protected function mapResourceObjectToContentEntity(ResourceObject $resource_object): ContentEntityInterface {
    $resource_type = $resource_object->getResourceType();
    return $this->serializer->denormalize($resource_object->getFields(), $resource_type->getDeserializationTargetClass(), 'api_json', [
      'resource_type' => $resource_type,
    ]);
  }

}
