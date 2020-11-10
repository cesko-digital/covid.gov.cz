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
class TextProcessedNormalizer extends TypedDataNormalizer {

  protected $supportedInterfaceOrClass = TextProcessed::class;

  /**
   * @inheritDoc
   */
  public function normalize($object, $format = NULL, array $context = []) {
    $data = parent::normalize($object, $format, $context);

    $data = $this->normalizeLinkit($data);

    $data = $this->normalizeExternalLinks($data);

    $data = $this->normalizeSpace($data);

    return $data;
  }

  /**
   * Remove the data-entity-* html attributes
   *
   * @param string $data
   *
   * @return string
   */
  protected function normalizeLinkit(string $data): string {
    return preg_replace('/(data-entity-[a-z\-]+="[\w\d\-]+"\s?)/u', '', $data);
  }

  /**
   * Add class="external" to external links.
   *
   * @param string $data
   *
   * @return string
   */
  private function normalizeExternalLinks(string $data): string {
    $matches = [];

    if (preg_match_all('/(<a[^>]+href=["\'](http|https):\/\/[^>]+>)/u', $data, $matches)) {
      foreach ($matches[0] as $match) {

        // When external keyword is already there, I guess we can presume that's the class and we can skip it.
        if (str_contains($match, 'external')) {
          continue;
        }

        $pattern = '/class=(["\'])/u';
        if (preg_match($pattern, $match)) {
          $replacement = preg_replace($pattern, 'class=\\1external ', $match);
        } else {
          // If class was not present in the string, we add it
          $replacement = str_replace('>', ' class="external">', $match);
        }

        $data = mb_ereg_replace($match, $replacement, $data);
      }
    }

    return $data;

  }

  private function normalizeSpace(string $data): string {
    $space = html_entity_decode("&nbsp;");

    return mb_ereg_replace('(?<![<-])\b(\w(?:\b|\.?))(<? )', "\\1$space", $data);
  }

}
