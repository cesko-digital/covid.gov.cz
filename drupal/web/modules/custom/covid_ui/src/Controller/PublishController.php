<?php


namespace Drupal\covid_ui\Controller;


use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Site\Settings;
use GuzzleHttp\Client;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

class PublishController extends ControllerBase {

  /**
   * @var \GuzzleHttp\Client
   */
  private $client;


  /**
   * PublishController constructor.
   */
  public function __construct(Client $client) {

    $this->client = $client;
  }

  public static function create(ContainerInterface $container) {
    return new static($container->get('http_client'));
  }


  public function publish() {
    $vercelKey = Settings::get('vercel_deploy_key', '');

    if (!$vercelKey) {
      $this->messenger()->addError('Integrace není nastavena.');

      return $this->redirect('<front>');
    }

    $response = $this->client->post('https://api.vercel.com/v1/integrations/deploy/' . $vercelKey);
    if ($response->getStatusCode() === 201) {
      $this->messenger()->addStatus('Obsah byl publikován na <a href="https://covidgov.cesko.digital/">testovací server</a>. Může to chvíli trvat, než se změny projeví.');
    } else {
      $this->messenger()->addError('Něco je špatně. Nepodařilo se obsah vypublikovat');
    }

    return $this->redirect('<front>');
  }
}
