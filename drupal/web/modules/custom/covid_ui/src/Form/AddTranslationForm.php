<?php


namespace Drupal\covid_ui\Form;


use Drupal\Component\Transliteration\TransliterationInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
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
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  private $entityTypeManager;


  /**
   * AddTranslationForm constructor.
   */
  public function __construct(TransliterationInterface $transliteration, EntityTypeManagerInterface $entityTypeManager) {
    $this->transliteration = $transliteration;
    $this->entityTypeManager = $entityTypeManager;
  }

  public static function create(ContainerInterface $container) {
    return new static($container->get('transliteration'), $container->get('entity_type.manager'));
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

    $storage = $this->entityTypeManager->getStorage('covid_translation');

    foreach (explode(PHP_EOL, $strings) as $string) {
      $string = $this->parseString($string);

      if ($string === "") {
        continue;
      }

      $translation = $storage->create([
        'source' => $string
      ]);

      $translation->save();
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
