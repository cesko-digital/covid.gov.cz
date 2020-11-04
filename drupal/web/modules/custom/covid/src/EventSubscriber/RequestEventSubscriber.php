<?php

namespace Drupal\covid\EventSubscriber;

use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\Url;
use Drupal\user\Entity\User;
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
   * RequestEventSubscriber constructor.
   *
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The current route match.
   * @param \Drupal\Core\Session\AccountInterface $current_user
   *   The current user.
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   *   The messenger.
   */
  public function __construct(RouteMatchInterface $route_match, AccountInterface $current_user, MessengerInterface $messenger) {
    $this->routeMatch = $route_match;
    $this->currentUser = $current_user;
    $this->messenger = $messenger;
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

      // Check if TFA is disabled.
      if ($user->get('one_time_password')->isEmpty()) {

        // Only if current route is not ignored.
        if (!in_array($this->routeMatch->getRouteName(), [
          'entity.user.edit_form',
          'one_time_password.setup_form',
          'user.logout',
        ])) {

          // Redirect to TFA setup form and show message.
          $url = new Url('one_time_password.setup_form', [
            'user' => $user->id(),
          ]);
          $event->setResponse(new RedirectResponse($url->toString()));
          $this->messenger->addError($this->t('Please enable two-factor authentication.'));
        }
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['checkOneTimePasswordEnabled'];
    return $events;
  }

}
