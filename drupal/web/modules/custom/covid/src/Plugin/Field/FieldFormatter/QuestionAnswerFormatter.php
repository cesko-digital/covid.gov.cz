<?php


namespace Drupal\covid\Plugin\Field\FieldFormatter;


use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;

/**
 * Plugin implementation of the 'covid_question_answer' formatter.
 *
 * @FieldFormatter(
 *   id = "covid_question_answer",
 *   label = @Translation("Default"),
 *   field_types = {
 *     "covid_question_answer",
 *   }
 * )
 */
class QuestionAnswerFormatter extends FormatterBase {

  /**
   * @inheritDoc
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements[0] = [
      '#theme' => 'item_list',
      '#items' => []
    ];

    foreach ($items as $delta => $item) {
      $elements[0]['#items'][$delta] = [
        '#markup' => $item->question . ' ' . $item->value
      ];
    }

    return $elements;
  }

}
