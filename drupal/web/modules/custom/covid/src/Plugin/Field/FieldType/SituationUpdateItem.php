<?php


namespace Drupal\covid\Plugin\Field\FieldType;


use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;
use Drupal\Core\TypedData\DataReferenceTargetDefinition;
use Drupal\text\Plugin\Field\FieldType\TextLongItem;

/**
 * Class SituationUpdateItem
 *
 * @FieldType(
 *   id = "covid_situation_update",
 *   label = @Translation("Situation update"),
 *   category = "COVID Portal",
 * )
 */
class SituationUpdateItem extends TextLongItem {

  /**
   * @inheritDoc
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = parent::schema($field_definition);

    return $schema;
  }

  /**
   * @inheritDoc
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties = parent::propertyDefinitions($field_definition);

    $properties['valid_from'] = DataDefinition::create('string')
      ->setLabel(t('Valid from'));

    $properties['valid_to'] = DataDefinition::create('string')
      ->setLabel(t('Valid to'));

    $properties['pes'] = DataReferenceTargetDefinition::create('integer')
      ->setSetting('unsigned', TRUE);

    return $properties;
  }

}
