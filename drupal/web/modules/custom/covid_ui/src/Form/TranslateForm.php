<?php


namespace Drupal\covid_ui\Form;


use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Language\Language;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Url;
use Drupal\covid\Entity\Translation;
use Drupal\covid\Entity\TranslationInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class TranslateForm extends FormBase {

  /**
   * @var \Drupal\Core\Language\LanguageManagerInterface
   */
  private $languageManager;

  /**
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  private $entityTypeManager;

  public function __construct(LanguageManagerInterface $languageManager, EntityTypeManagerInterface $entityTypeManager) {
    $this->languageManager = $languageManager;
    $this->entityTypeManager = $entityTypeManager;
  }

  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('language_manager'),
      $container->get('entity_type.manager')
    );
  }


  public function getFormId() {
    return 'covid_ui_translate_form';
  }

  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['link'] = [
      '#type' => 'link',
      '#title' => 'Přidat překlady',
      '#url' => Url::fromRoute('covid_ui.translation_add'),
    ];

    $data = $this->loadTranslations();

    $rows = [];

    $languages = $this->languageManager->getLanguages();

    /** @var \Drupal\covid\Entity\Translation $translation */
    foreach ($data as $source => $values) {

      $row = [
        'source' => [
          '#type' => 'hidden',
          '#value' => $source,
          '#prefix' => $source
        ],
      ];

      $row += array_map(function (Language $language) use ($values) {
        return [
          '#type' => 'textfield',
          '#default_value' => $values[$language->getId()] ?? '',
        ];
      }, $languages);

      $rows[] = $row;
    }

    $form['table'] = [
      '#type' => 'table',
      '#header' => ['lid' => 'klíč'] + array_map(function(Language $language) {
        return $language->getName();
      }, $languages),
    ] + $rows;

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => 'Uložit',
    ];

    return $form;
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $languages = $this->languageManager->getLanguages();

    foreach ($values['table'] as $row) {
      foreach ($languages as $langcode => $language) {
        $source = $row['source'];
        $value = $row[$langcode] ?? '';

        $this->setTranslation($source, $value, $langcode);
      }
    }

    $this->messenger()->addMessage('Překlady byly uloženy');
  }

  protected function setTranslation(string $source, string $target, string $langcode): void {
    if (!$target) {
      return;
    }

    $translation = $this->getTranslation($source, $langcode);

    if ($translation->getTarget() !== $target) {
      $translation->setTarget($target);

      $translation->save();
    }
  }

  protected function loadTranslations(): array {
    $storage = $this->entityTypeManager->getStorage('covid_translation');

    $translations = $storage->loadMultiple(NULL);

    $data = [];

    /** @var \Drupal\covid\Entity\Translation $translation */
    foreach ($translations as $translation) {
      $data[$translation->getSource()][$translation->getLangcode()] = $translation->getTarget();
    }

    return $data;
  }

  private function getTranslation(string $source, string $langcode): TranslationInterface {
    $storage = $this->entityTypeManager->getStorage('covid_translation');

    $query = $storage->getQuery();

    $query->condition('source', $source);
    $query->condition('langcode', $langcode);

    $result = $query->execute();

    if (!$result) {
      return $storage->create([
        'source' => $source,
        'langcode' => $langcode
      ]);
    }

    return $storage->load(reset($result));
  }

}
