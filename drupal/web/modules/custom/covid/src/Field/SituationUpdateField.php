<?php


namespace Drupal\covid\Field;


use DateTime;
use Drupal;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Field\FieldItemList;
use Drupal\Core\TypedData\ComputedItemListTrait;
use Drupal\covid\Helper\RegionHelper;

class SituationUpdateField extends FieldItemList {

  use ComputedItemListTrait;

  /**
   * @inheritDoc
   */
  protected function computeValue() {
    /** @var \Drupal\node\NodeInterface $node */
    $node = $this->getParent()->getValue();

    if ($node->bundle() === 'situation') {
      $langcode = Drupal::languageManager()->getCurrentLanguage()->getId();

      $region = $node->field_region->entity;

      if (!$region) {
        return;
      }

      $pes = RegionHelper::getPES($region);

      $nextValidity = RegionHelper::getNextValidity($region);

      if (!$pes || !$nextValidity) {
        return;
      }

      $nextPes = $nextValidity->field_pes->entity;

      foreach ($node->field_updates->referencedEntities() as $update) {

        $update = $this->getTranslation($update, $langcode);

        if ($update->field_pes->entity->id() === $pes->id() && $update->field_pes_target->entity->id() === $nextPes->id()) {
          $from = $nextValidity->field_valid_from->date ?? NULL;
          $to = $nextValidity->field_valid_to->date ?? NULL;
          if (empty($update->field_content->first())) {
            \Drupal::logger('situation-update')->critical('Skipping PES field because it has empty content for update ' . $update->id() . ' at node ' . $node->id());
            continue;
          }
          $value = $update->field_content->first()->getValue() + [
              'pes' => $nextPes->field_level->value,
              'valid_from' => $from ? $this->formatDate($from) : '',
              'valid_to' => $to ? $this->formatDate($to) : ''
            ];

          $this->list[0] = $this->createItem(0, $value);

          return;
        }
      }
    }
  }

  protected function getTranslation(EntityInterface $entity, string $langcode): EntityInterface {
    if ($entity->hasTranslation($langcode)) {
      return $entity->getTranslation($langcode);
    }

    return $entity;
  }

  /**
   * @param \Drupal\Core\Datetime\DrupalDateTime $from
   *
   * @return string
   */
  protected function formatDate(DrupalDateTime $from): string {
    /** @var \Drupal\Core\Datetime\DateFormatterInterface $formatter */
    $formatter = Drupal::service('date.formatter');

    return $formatter->format($from->getTimestamp(), 'custom', DateTime::W3C);
  }

}
