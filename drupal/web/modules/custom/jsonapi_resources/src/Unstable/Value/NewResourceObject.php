<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Value;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\jsonapi\JsonApiResource\LinkCollection;
use Drupal\jsonapi\JsonApiResource\ResourceObject;
use Drupal\jsonapi\ResourceType\ResourceType;

/**
 * Represents a resource object to be created.
 *
 * A new resource object does not require many of the arguments required for
 * construction a "regular" resource object. For example, when adding a resource
 * object, an ID is not required.
 *
 * @internal
 *   Do not use this class. It is for internal use and will be phased out when
 *   core support for similar behavior exists.
 */
final class NewResourceObject extends ResourceObject {

  /**
   * Creates a new resource object from a decoded JSON:API request's data.
   *
   * @param \Drupal\jsonapi\ResourceType\ResourceType $resource_type
   *   The resource type of the resource object to be created.
   * @param array $primary_data
   *   The decoded request's primary data. This is *not* denormalized data,
   *   rather, it is the raw decoded JSON from the request body that has not yet
   *   been denormalized into in-memory objects.
   *
   * @return \Drupal\jsonapi_resources\Unstable\Value\NewResourceObject
   *   A new resource object.
   */
  public static function createFromPrimaryData(ResourceType $resource_type, array $primary_data) {
    $id = $primary_data['id'] ?? \Drupal::service('uuid')->generate();
    $fields = array_merge(
      $primary_data['attributes'] ?? [],
      $primary_data['relationships'] ?? []
    );
    return new static(new CacheableMetadata(), $resource_type, $id, NULL, $fields, new LinkCollection([]));
  }

}
