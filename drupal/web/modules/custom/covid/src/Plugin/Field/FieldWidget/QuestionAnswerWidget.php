<?php


namespace Drupal\covid\Plugin\Field\FieldWidget;


use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldWidget\StringTextareaWidget;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'mr_person_widget' widget.
 *
 * @FieldWidget(
 *   id = "covid_question_answer_widget",
 *   label = @Translation("Question Answer"),
 *   field_types = {
 *     "covid_question_answer"
 *   }
 * )
 */
class QuestionAnswerWidget extends StringTextareaWidget {

  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element = parent::formElement($items, $delta, $element, $form, $form_state);

    $value = $items[$delta]->getValue();

    $element['question'] = [
      '#type' => 'textfield',
      '#title' => 'Otázka',
      '#default_value' => $value['question'] ?? '',
      '#weight' => -1
    ];

    $element['value']['#title'] = 'Odpověď';
    $element['value']['#title_display'] = 'before';

    return $element;
  }


}
