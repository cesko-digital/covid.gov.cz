<?php


namespace Drupal\covid_ui\Form;


use Drupal\Component\Transliteration\TransliterationInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\locale\SourceString;
use Drupal\locale\StringDatabaseStorage;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AddTranslationForm extends FormBase {

  /**
   * @var \Drupal\Component\Transliteration\TransliterationInterface
   */
  private $transliteration;

  /**
   * @var \Drupal\locale\StringDatabaseStorage
   */
  private $stringDatabaseStorage;


  /**
   * AddTranslationForm constructor.
   */
  public function __construct(TransliterationInterface $transliteration, StringDatabaseStorage $stringDatabaseStorage) {
    $this->transliteration = $transliteration;
    $this->stringDatabaseStorage = $stringDatabaseStorage;
  }

  public static function create(ContainerInterface $container) {
    return new static($container->get('transliteration'), $container->get('locale.storage'));
  }


  public function getFormId() {
    return 'covdi_ui_add_translation_form';
  }

  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['strings'] = [
      '#type' => 'textarea',
      '#title' => 'Řetězce k přidání',
      '#required' => TRUE,
      '#description' => 'Na každý řádek jeden identifikátor řetězce. Jsou povolena pouze písmena anglické abecedy a `_`. Vše ostatní bude odstraněno.',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => 'Vytvořit'
    ];

    return $form;
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $strings = $form_state->getValue('strings');

    foreach (explode(PHP_EOL, $strings) as $string) {

      $string = $this->parseString($string);

      $sourceString = new SourceString();
      $sourceString->setString($string);
      $sourceString->context = 'covid';
      $sourceString->setStorage($this->stringDatabaseStorage);
      $sourceString->save();
    }

    $this->messenger()->addMessage('Řetězce byly přidány a jsou připraveny k překladu.');
  }

  /**
   * @param string $string
   *
   * @return string
   */
  protected function parseString(string $string): string {
    $string = trim($string);

    $string = $this->transliteration->removeDiacritics($string);

    $string = str_replace(' ', '_', $string);
    $string = strtolower($string);

    return $string;
  }

}
