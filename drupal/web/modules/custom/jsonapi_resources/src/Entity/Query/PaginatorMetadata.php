<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Entity\Query;

/**
 * Class PaginatorMetadata.
 */
final class PaginatorMetadata {

  const KEY = 'jsonapi_resource_paginator_metadata';

  /**
   * Whether there should be a `next` page link.
   *
   * @var bool
   */
  public $hasNextPage;

  /**
   * The maximum number of results that may be returned in the response.
   *
   * @var int
   */
  public $pageSizeMax;

  /**
   * A property storing the current location of the paginator.
   *
   * For an offset-limit based paginator, this would be the offset. For a
   * cursor-based paginator, this might be an opaque string.
   *
   * @var mixed
   */
  public $pageLocation;

}
