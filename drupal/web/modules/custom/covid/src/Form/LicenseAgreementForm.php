<?php

namespace Drupal\covid\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\UserDataInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a Covid form.
 */
class LicenseAgreementForm extends FormBase {

  /**
   * User Data.
   *
   * @var \Drupal\user\UserDataInterface
   */
  private $userData;

  /**
   * LicenseAgreementForm constructor.
   *
   * @param \Drupal\user\UserDataInterface $userData
   *   User data.
   */
  public function __construct(UserDataInterface $userData) {
    $this->userData = $userData;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('user.data')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'covid_license_agreement';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['text'] = [
      '#markup' => <<<EOT
<div class="content--narrow">
<p>Dobrý den, obsah webu je zveřejňován pod veřejnou licencí
Creative Commons CC BY 4.0 Mezinárodní, abychom ještě umocnili
veřejně-prospěšný účel webu a umožnili všem zájemcům zveřejněné texty
dále používat. CC BY je veřejnou licenci, která umožňuje komukoliv texty
užívat (tedy zejména kopírovat, sdílet, rozvíjet atd.), pokud uvedou
původ díla. Abychom toto mohli udělat, potřebujeme Váš souhlas se
zveřejněním díla pod příslušnou licencí a s tím, že texty budou
prezentovány pod jménem Národní agentury pro komunikačních a
informační technologie (NAKIT), která celý projekt zaštiťuje a organizuje.</p>
<p>Moc děkujeme za spolupráci. Váš souhlas pomůže k tomu, abychom potřebné
informace dostali k širšímu publiku.</p>
<p><strong>Potvrďte prosím zaškrtnutím políčka níže, že souhlasíte s následujícími
licenčními ujednáními:</strong></p>
<p><i>„Vstupem do administrace Covid portálu uděluji Národní agentuře pro komunikačních
a informační technologie (dále jen „NAKIT“) bezúplatné nevýhradní oprávnění k
užití všech literárních děl, které jsem vytvořila/vytvořil nebo vytvořím pro
webovou stránku Covid portál (dále jen „díla“), a to ke všem způsobům užití
těchto děl, územně, věcně i množstevně neomezeným, s neomezenými právy
provádět na díle změny, úpravy, spojení s jiným dílem či díly, vytváření
odvozených děl, a to na celou dobu trvání majetkových práv, a to včetně práva
NAKIT zveřejnit dílo pod veřejnou licencí Creative Commons CC BY 4.0
Mezinárodní. Uděluji NAKIT rovněž souhlas s tím, že smí díla zveřejnit pod
svým jménem. NAKIT není povinen dílo užít. Zároveň prohlašuji, že na
dílech neváznou práva třetích osob.“</i></p></div>
EOT,
    ];

    $form['agreement'] = [
      '#type' => 'checkbox',
      '#title' => 'Souhlasím',
      '#required' => TRUE,
    ];

    $form['actions'] = [
      '#type' => 'actions',
    ];
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Save time of submission.
    $this->userData->set('covid', $this->currentUser()
      ->id(), 'license_agreement', time());
    $form_state->setRedirect('<front>');
  }

}
