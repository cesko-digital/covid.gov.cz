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
    $region = $node->field_region->entity ?? NULL;

    if ($region === NULL) {
      return NULL;
    }

    $pes = RegionHelper::getPES($region);

    if ($pes === NULL) {
      return NULL;
    }

    foreach ($node->field_pes_content->referencedEntities() as $version) {
      foreach ($pes as $item) {
        if ($version->field_pes->entity->id() === $item) {
          return $version;
        }
      }
    }

    return NULL;

  }
}
