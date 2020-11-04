<?php


namespace Drupal\covid\Entity;


use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\StringTranslation\TranslatableMarkup;

/**
 * Class Translation
 *
 * @ContentEntityType(
 *   id = "covid_translation",
 *   label = @Translation("Translation"),
 *   handlers = {
 *     "access" = "Drupal\covid\TranslationAccessControlHandler",
 *   },
 *   base_table = "covid_translation",
 *   data_table = "remote_node_field_data",
 *   translatable = FALSE,
 *   fieldable = FALSE,
 *   entity_keys = {
 *     "id" = "id",
 *     "uuid" = "uuid",
 *     "langcode" = "langcode",
 *   },
 * )
 */
class Translation extends ContentEntityBase implements TranslationInterface {

  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['source'] = BaseFieldDefinition::create('string')
      ->setLabel('Source')
      ->setSettings([
        'max_length' => 255,
        'text_processing' => 0
      ]);

    $fields['langcode'] = BaseFieldDefinition::create('language')
      ->setLabel('Language');

    $fields['target'] = BaseFieldDefinition::create('string')
      ->setLabel('Target')
      ->setSettings([
        'max_length' => 255,
        'text_processing' => 0
      ]);

    return $fields;
  }

  public function getSource(): string {
    return $this->get('source')->value ?? '';
  }

  public function getLangcode(): string {
    return $this->get('langcode')->value ?? '';
  }

  public function getTarget(): string {
    return $this->get('target')->value ?? '';
  }

  public function setTarget(string $value): Translation {
    $this->set('target', $value);

    return $this;
  }

}
