<?php

namespace Drupal\jsonapi_resources_test\Resource;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi\ResourceResponse;
use Drupal\jsonapi_resources\Resource\EntityQueryResourceBase;
use Drupal\node\NodeInterface;
use Drupal\user\UserInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Processes a request to create a reminder node for a user.
 *
 * @package Drupal\jsonapi_resources_test\Resource
 */
final class AddReminder extends EntityQueryResourceBase implements ContainerInjectionInterface {

  /**
   * The current user account.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $currentUser;

  /**
   * Constructs a resource for adding a reminder.
   *
   * @param \Drupal\Core\Session\AccountInterface $current_user
   *   The current user account.
   */
  public function __construct(AccountInterface $current_user) {
    $this->currentUser = $current_user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('current_user')
    );
  }

  /**
   * Process the resource request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param \Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel $document
   *   The deserialized request document.
   *
   * @return \Drupal\jsonapi\ResourceResponse
   *   The response.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\ConflictHttpException
   *   Thrown when the entity to be created already exists.
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   *   Thrown if the storage handler couldn't be loaded.
   * @throws \Drupal\Core\Entity\EntityStorageException
   *   Thrown if the entity could not be saved.
   */
  public function process(Request $request, JsonApiDocumentTopLevel $document): ResourceResponse {
    return $this->processEntityCreation($request, $document);
  }

  /**
   * {@inheritdoc}
   */
  protected function modifyCreatedEntity(EntityInterface $created_entity, Request $request) {
    assert($created_entity instanceof NodeInterface);
    $created_entity->setOwnerId($this->currentUser->id());
  }

  /**
   * Performs custom access checks for the route.
   *
   * @param \Drupal\user\UserInterface $user
   *   The user from the route.
   *
   * @return \Drupal\Core\Access\AccessResult
   *   Allowed if the currently authenticated user is the same as the user
   *   loaded via a route parameter, FALSE otherwise.
   */
  public function access(UserInterface $user) {
    return AccessResult::allowedIf($user->id() === $this->currentUser->id())->cachePerUser();
  }

}
