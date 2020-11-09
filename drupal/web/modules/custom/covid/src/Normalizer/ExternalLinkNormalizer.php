<?php


namespace Drupal\covid\Normalizer;


use Drupal\serialization\Normalizer\TypedDataNormalizer;
use Drupal\text\TextProcessed;

/**
 * Class ExternalLinkNormalizer
 *
 * Add external class to external links.
 *
 * @package Drupal\covid\Normalizer
 */
class ExternalLinkNormalizer extends TypedDataNormalizer {

  protected $supportedInterfaceOrClass = TextProcessed::class;

  /**
   * @inheritDoc
   */
  public function normalize($object, $format = NULL, array $context = []) {
    /** @var TextProcessed $object */
    $string = $object->getString();

    $matches = [];

    if (preg_match_all('/(<a[^>]+href=["\'](http|https):\/\/[^>]+>)/', $string, $matches)) {
      foreach ($matches[0] as $match) {

        // When external keyword is already there, I guess we can presume that's the class and we can skip it.
        if (str_contains($match, 'external')) {
          continue;
        }

        $replacement = preg_replace('/class=(["\'])/', 'class=${1}external ', $match, 1, $count);

        // If class was not present in the string, we add it
        if (!$count) {
          $replacement = str_replace('>', ' class="external">', $match);
        }

        $string = str_replace($match, $replacement, $string);
      }
    }

    return $string;
  }

}
