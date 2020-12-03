<?php


namespace Drupal\covid\Helper;


use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Entity\EntityInterface;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;

class RegionHelper {

  /**
   * Get all next valid from dates of region.
   *
   * @param \Drupal\Core\Entity\EntityInterface $region
   *
   * @return \Drupal\Core\Entity\EntityInterface[]
   */
  public static function getNextValidities(EntityInterface $region): array {
    $entities = [];

    $now = (new DrupalDateTime())->format(DateTimeItemInterface::DATETIME_STORAGE_FORMAT);
    foreach ($region->field_validity->referencedEntities() as $entity) {

      $from = $entity->field_valid_from->value ?? "";

      if ($from > $now) {
        $entities[] = $entity;
      }
    }

    usort($entities, function (EntityInterface $a, EntityInterface $b) {
      return $a->field_valid_from->value ?? "" > $b->field_valid_from->value ?? "";
    });

    return $entities;
  }

  /**
   * Get current PES level depending on region.
   *
   * @param $region
   *
   * @return EntityInterface[]
   */
  public static function getPES(EntityInterface $region): array {
    $result = [];
    $now = (new DrupalDateTime())->format(DateTimeItemInterface::DATETIME_STORAGE_FORMAT);

    foreach ($region->field_validity->referencedEntities() as $validity) {
      $from = $validity->field_valid_from->value ?? "";
      $to = $validity->field_valid_to->value ?? "9999-12-31T23:59:59";

      if ($from <= $now && $now <= $to) {
        $pes = $validity->field_pes->entity ?? NULL;
        if (!empty($pes)) {
          $result[] = $pes;
        }
      }
    }

    return $result;
  }

}
