<?php


namespace Drupal\covid\Normalizer;


use Drupal\serialization\Normalizer\TypedDataNormalizer;
use Drupal\text\TextProcessed;

/**
 * Class LinkitNormalizer
 *
 * Normalizes the linkit module output to clean up the text being served
 * to the front-end.
 *
 * @package Drupal\covid\Normalizer
 */
class LinkitNormalizer extends TypedDataNormalizer {

  protected $supportedInterfaceOrClass = TextProcessed::class;

  /**
   * @inheritDoc
   */
  public function normalize($object, $format = NULL, array $context = []) {
    /** @var TextProcessed $object */
    $string = $object->getString();

    // Remove the data-entity-* html attributes
    return preg_replace('/(data-entity-[\w]+="[\w\d\-]+"\s?)/', '', $string);
  }

}
