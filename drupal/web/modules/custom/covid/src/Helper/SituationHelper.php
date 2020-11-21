<?php


namespace Drupal\covid\Helper;

use Drupal\node\NodeInterface;
use Drupal\paragraphs\ParagraphInterface;

class SituationHelper {

  /**
   * Get the currently active version of situation.
   *
   * @param \Drupal\node\NodeInterface $node
   *
   * @return \Drupal\paragraphs\ParagraphInterface|null
   */
  public static function getActiveVersion(NodeInterface $node): ?ParagraphInterface {
    $region = $node->field_region->entity;

    $pes = $region->field_pes->entity ?? NULL;

    if ($pes === NULL) {
      return NULL;
    }

    foreach ($node->field_pes_content->referencedEntities() as $version) {
      if ($version->field_pes->entity->id() === $pes->id()) {
        return $version;
      }
    }

    return NULL;

  }
}
