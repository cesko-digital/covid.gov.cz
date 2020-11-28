<?php


namespace Drupal\covid\Helper;


use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\node\NodeInterface;
use Drupal\paragraphs\ParagraphInterface;

class MeasureHelper {

  /**
   * Get the currently active version of the measure (timewise).
   *
   * @param \Drupal\node\NodeInterface $node
   *
   * @return \Drupal\paragraphs\ParagraphInterface|null
   */
  public static function getActiveVersion(NodeInterface $node): ?ParagraphInterface {
    $now = (new DrupalDateTime())->format(DateTimeItemInterface::DATETIME_STORAGE_FORMAT);

    foreach ($node->field_versions->referencedEntities() as $version) {

      $from = $version->field_valid_from->value ?? "";
      $to = $version->field_valid_to->value ?? "9999-12-31T23:59:59";

      if ($from <= $now && $now <= $to) {
        return $version;
      }
    }

    return NULL;
  }

}
