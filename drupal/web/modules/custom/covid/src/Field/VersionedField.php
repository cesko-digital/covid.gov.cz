<?php


namespace Drupal\covid\Field;


use Drupal;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Field\FieldItemList;
use Drupal\Core\TypedData\ComputedItemListTrait;
use Drupal\covid\Helper\MeasureHelper;
use Drupal\covid\Helper\SituationHelper;

class VersionedField extends FieldItemList {

  use ComputedItemListTrait;

  /**
   * @inheritDoc
   */
  protected function computeValue() {
    $node = $this->getParent()->getValue();

    if ($node->bundle() === 'measure') {
      $version = MeasureHelper::getActiveVersion($node);

      $entity = $version ?? $node;

      $this->createFieldItem($entity);
    }

    if ($node->bundle() === 'situation') {
      $version = SituationHelper::getActiveVersion($node);

      $entity = $version ?? $node;

      $this->createFieldItem($entity);
    }
  }

  private function createFieldItem(EntityInterface $entity) {
    $langcode = Drupal::languageManager()->getCurrentLanguage()->getId();

    if ($entity->hasTranslation($langcode)) {
      $entity = $entity->getTranslation($langcode);
    }

    $fieldName = $this->getSetting('field');

    foreach ($this->getSynonyms($fieldName) as $synonym) {
      if ($entity->hasField($synonym)) {
        foreach ($entity->{$synonym}->getValue() as $key => $value) {
          $this->list[$key] = $this->createItem($key, $value);
        }
      }
    }


  }

  /**
   * In case the field is not always called the same, allow synonyms.
   *
   * @param string $fieldName
   *
   * @return string[]
   */
  private function getSynonyms(string $fieldName): array {
    $synonyms = [
      'field_questions_answers' => [
        'field_questions_answers', 'field_qa'
      ]
    ];

    return $synonyms[$fieldName] ?? [$fieldName];

  }

}
