<?php


namespace Drupal\covid\Plugin\Field\FieldType;


use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;
use Drupal\text\Plugin\Field\FieldType\TextLongItem;

/**
 * Class QuestionAnswerItem
 *
 * @FieldType(
 *   id = "covid_question_answer",
 *   label = @Translation("Question Answer"),
 *   description = @Translation("Question and its anser."),
 *   category = "COVID Portal",
 *   default_widget = "covid_question_answer_widget",
 *   default_formatter = "text_default"
 * )
 */
class QuestionAnswerItem extends TextLongItem {

  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = parent::schema($field_definition);

    $schema['columns']['question'] = [
      'type' => 'text',
      'size' => 'small'
    ];

    return $schema;
  }

  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties = parent::propertyDefinitions($field_definition);

    $properties['question'] = DataDefinition::create('string')
      ->setLabel(t('Question'))
      ->setRequired(TRUE);

    return $properties;
  }


}
