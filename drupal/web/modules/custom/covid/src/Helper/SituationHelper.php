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

    $currentPes = RegionHelper::getPES($region);

    if ($currentPes === []) {
      return NULL;
    }

    foreach ($node->field_pes_content->referencedEntities() as $version) {
      foreach ($currentPes as $pes) {
        if ($version->field_pes->entity->id() === $pes->id()) {
          return $version;
        }
      }
    }

    return NULL;

  }
}
