<?php

namespace Drupal\covid\EventSubscriber;

use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\Url;
use Drupal\user\Entity\User;
use Drupal\user\UserDataInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Listens to the request events.
 */
class RequestEventSubscriber implements EventSubscriberInterface {

  use StringTranslationTrait;

  /**
   * The current route match.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  protected $routeMatch;

  /**
   * The current user.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $currentUser;

  /**
   * The messenger.
   *
   * @var \Drupal\Core\Messenger\MessengerInterface
   */
  protected $messenger;

  /**
   * User data.
   *
   * @var UserDataInterface
   */
  protected $userData;

  /**
   * RequestEventSubscriber constructor.
   *
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The current route match.
   * @param \Drupal\Core\Session\AccountInterface $current_user
   *   The current user.
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   *   The messenger.
   * @param \Drupal\user\UserDataInterface $userData
   *   User data.
   */
  public function __construct(RouteMatchInterface $route_match, AccountInterface $current_user, MessengerInterface $messenger, UserDataInterface $userData) {
    $this->routeMatch = $route_match;
    $this->currentUser = $current_user;
    $this->messenger = $messenger;
    $this->userData = $userData;
  }

  /**
   * Checks one time password TFA is enabled for the current user.
   *
   * @param \Symfony\Component\HttpKernel\Event\RequestEvent $event
   *   The request event.
   */
  public function checkOneTimePasswordEnabled(RequestEvent $event) {
    // Only for authenticated users.
    if ($this->currentUser->isAuthenticated()) {
      $user = User::load($this->currentUser->id());
      $license_agreement = $this->userData->get('covid', $user->id(), 'license_agreement');

      // Check if TFA is disabled.
      if ($user->get('one_time_password')->isEmpty()) {

        // Only if current route is not ignored.
        if (!in_array($this->routeMatch->getRouteName(), [
          'entity.user.edit_form',
          'one_time_password.setup_form',
          'user.logout',
          'covid.license_agreement',
        ])) {

          // Redirect to TFA setup form and show message.
          $url = new Url('one_time_password.setup_form', [
            'user' => $user->id(),
          ]);
          $event->setResponse(new RedirectResponse($url->toString()));
          $this->messenger->addError("Prosím zapněte dvoufaktorovou autorizaci pro váš účet.");
        }
      }
      elseif (empty($license_agreement)) {
        // Only if current route is not ignored.
        if (!in_array($this->routeMatch->getRouteName(), [
          'entity.user.edit_form',
          'one_time_password.setup_form',
          'user.logout',
          'covid.license_agreement',
        ])) {
          // Redirect to TFA setup form and show message.
          $url = new Url('covid.license_agreement');
          $event->setResponse(new RedirectResponse($url->toString()));
          $this->messenger->addError("Prosíme o udělení souhlasu s licenčním dojednáním.");
        }
      }

      // Don't allow access to license agreement page if user already agreed.
      if ($this->routeMatch->getRouteName() === 'covid.license_agreement' && !empty($license_agreement)) {
        $url = new Url('<front>');
        $event->setResponse(new RedirectResponse($url->toString()));
        $this->messenger->addStatus("Souhlas s licenčním ujednáním  byl již udělen.");
      }
    }
  }

  /**
   * Force user to agree with license.
   *
   * @param \Symfony\Component\HttpKernel\Event\RequestEvent $event
   *   The request event.
   */
  public function forceLicenseAgreement(RequestEvent $event) {
    // Only for authenticated users.
    if ($this->currentUser->isAuthenticated()) {
      $user = User::load($this->currentUser->id());
      $license_agreement = $this->userData->get('covid', $user->id(), 'license_agreement');

      // Check if TFA is disabled.
      if (empty($license_agreement)) {
        // Only if current route is not ignored.
        if (!in_array($this->routeMatch->getRouteName(), [
          'entity.user.edit_form',
          'one_time_password.setup_form',
          'user.logout',
          'covid.license_agreement',
        ])) {
          // Redirect to TFA setup form and show message.
          $url = new Url('covid.license_agreement');
          $event->setResponse(new RedirectResponse($url->toString()));
          $this->messenger->addError("Prosíme o udělení souhlasu s licenčním dojednáním.");
        }
      }
    }
  }

  /**
   * Don't allow access to license agreement page if user already agreed with it.
   *
   * @param \Symfony\Component\HttpKernel\Event\RequestEvent $event
   *   The request event.
   */
  public function checkLicenseAgreement(RequestEvent $event) {
    // Only for authenticated users.
    if ($this->currentUser->isAuthenticated()) {
      $user = User::load($this->currentUser->id());
      $license_agreement = $this->userData->get('covid', $user->id(), 'license_agreement');

      // Don't allow access to license agreement page if user already agreed.
      if ($this->routeMatch->getRouteName() === 'covid.license_agreement' && !empty($license_agreement)) {
        $url = new Url('<front>');
        $event->setResponse(new RedirectResponse($url->toString()));
        $this->messenger->addStatus("Souhlas s licenčním ujednáním  byl již udělen.");
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['checkOneTimePasswordEnabled'];
    $events[KernelEvents::REQUEST][] = ['forceLicenseAgreement'];
    $events[KernelEvents::REQUEST][] = ['checkLicenseAgreement'];
    return $events;
  }

}
