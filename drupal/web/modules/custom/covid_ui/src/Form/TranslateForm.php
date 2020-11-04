<?php


namespace Drupal\covid_ui\Form;


use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Language\Language;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Url;
use Drupal\locale\StringDatabaseStorage;
use Symfony\Component\DependencyInjection\ContainerInterface;

class TranslateForm extends FormBase {

  /**
   * @var \Drupal\locale\StringDatabaseStorage
   */
  private $storage;

  /**
   * @var \Drupal\Core\Language\LanguageManagerInterface
   */
  private $languageManager;

  public function __construct(StringDatabaseStorage $stringDatabaseStorage, LanguageManagerInterface $languageManager) {
    $this->storage = $stringDatabaseStorage;
    $this->languageManager = $languageManager;
  }

  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('locale.storage'),
      $container->get('language_manager')
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

    $strings = $this->storage->getStrings([
      'context' => 'covid',
    ]) ?? [];

    $this->storage->getTranslations(['context' => 'covid']);

    $rows = [];

    $languages = $this->languageManager->getLanguages();

    /** @var \Drupal\locale\SourceString $string */
    foreach ($strings as $string) {
      $translations = $this->storage->getTranslations([
        'lid' => $string->getId()
      ]);

      $values = [];
      foreach ($translations as $translation) {
        $values[$translation->language] = $translation->getString();
      }

      $row = [
        'lid' => [
          '#type' => 'hidden',
          '#value' => $string->getId(),
          '#prefix' => $string->getString()
        ]
      ];

      $row += array_map(function (Language $language) use ($values) {
        return [
          '#type' => 'textfield',
          '#default_value' => $values[$language->getId()] ?? ''
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
      '#value' => 'Uložit'
    ];

    return $form;
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $languages = $this->languageManager->getLanguages();

    foreach ($values['table'] as $row) {
      foreach ($languages as $langcode => $language) {
        $lid = $row['lid'];
        $value = $row[$langcode] ?? '';

        $this->addTranslation($value, $lid, $langcode);
      }

    }

    $this->messenger()->addMessage('Překlady byly uloženy');
  }

  protected function addTranslation(string $string, int $lid, string $langcode): void {
    if (!$string) {
      return;
    }

    $translation = $this->storage->findTranslation([
      'lid' => $lid, 'language' => $langcode
    ]);

    if ($translation->isNew() || $translation->getString() !== $string) {
      $translation->setString($string);
      $translation->language = $langcode;

      $translation->save();
    }
  }

}
