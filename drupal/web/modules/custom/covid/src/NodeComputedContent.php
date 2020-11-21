<?php


namespace Drupal\covid;


use Drupal;
use Drupal\Core\Field\FieldItemList;
use Drupal\Core\TypedData\ComputedItemListTrait;
use Drupal\covid\Helper\MeasureHelper;
use Drupal\node\NodeInterface;
use Drupal\paragraphs\ParagraphInterface;

class NodeComputedContent extends FieldItemList {

  use ComputedItemListTrait;


  /**
   * @inheritDoc
   */
  protected function computeValue() {
    $node = $this->getParent()->getValue();

    $value = [];

    if ($node instanceof NodeInterface) {
      $langcode = Drupal::languageManager()->getCurrentLanguage()->getId();

      if ($node->hasTranslation($langcode)) {
        $node = $node->getTranslation($langcode);
      }

      if ($node->bundle() === 'situation') {
        $value = $this->getSituationValue($node, $langcode);
      } else if ($node->bundle() === 'measure') {
        $value = $this->getMeasureValue($node, $langcode);
      } else if ($node->hasField('field_content')) {
        $value = $node->field_content->value;
      }
    }

    $this->list[0] = $this->createItem(0, [
      'value' => $value ?? '',
      'format' => 'basic'
    ]);
  }

  /**
   * Get the correct value of node depending on currently active PES level.
   *
   * We try to find whether the node has a PES content with level which matches
   * the currently active PES level and we return it. Otherwise we just return
   * the normal content of the node.
   */
  private function getSituationValue(NodeInterface $node, string $langcode) {
    $region = $node->field_region->entity;

    $pes = $region->field_pes->entity ?? NULL;

    if ($pes) {
      foreach ($node->field_pes_content->referencedEntities() as $paragraph) {
        if ($paragraph->field_pes->entity->id() === $pes->id()) {
          $paragraph = $this->getTranslation($paragraph, $langcode);

          return $paragraph->field_content->value;
        }
      }
    }

    return $node->field_content->value;
  }

  /**
   * Get the correct value of measure node depending on the current time.
   *
   * If no version is found, the default content is returned.
   *
   * @param \Drupal\node\NodeInterface $node
   * @param string $langcode
   *
   * @return mixed
   */
  private function getMeasureValue(NodeInterface $node, string $langcode) {
    $version = MeasureHelper::getActiveVersion($node);

    if ($version) {
      $version = $this->getTranslation($version, $langcode);

      return $version->field_content->value;
    }

    return $node->field_content->value;
  }

  /**
   * Get the correct translation of a paragraph.
   *
   * @param \Drupal\paragraphs\ParagraphInterface $paragraph
   * @param string $langcode
   *
   * @return \Drupal\paragraphs\ParagraphInterface
   */
  private function getTranslation(ParagraphInterface $paragraph, string $langcode): ParagraphInterface {
    if ($paragraph->hasTranslation($langcode)) {
      return $paragraph->getTranslation($langcode);
    }

    return $paragraph;
  }

}
