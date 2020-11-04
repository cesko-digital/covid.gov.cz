<?php

namespace Drupal\jsonapi_resources_test\Resource;

use Drupal\Core\Access\CsrfRequestHeaderAccessCheck;
use Drupal\Core\Access\CsrfTokenGenerator;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\jsonapi\JsonApiResource\LinkCollection;
use Drupal\jsonapi\JsonApiResource\ResourceObject;
use Drupal\jsonapi\JsonApiResource\ResourceObjectData;
use Drupal\jsonapi\ResourceType\ResourceType;
use Drupal\jsonapi\ResourceType\ResourceTypeAttribute;
use Drupal\jsonapi_resources\Resource\ResourceBase;
use Drupal\user\UserInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Route;

/**
 * Processes a request for the authenticated user's information.
 *
 * @internal
 */
class CurrentUserInfo extends ResourceBase implements ContainerInjectionInterface {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The current user account.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $currentUser;

  /**
   * The CSRF token generator.
   *
   * @var \Drupal\Core\Access\CsrfTokenGenerator
   */
  protected $tokenGenerator;

  /**
   * Constructs a new EntityResourceBase object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   Tne entity type manager.
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The current user.
   * @param \Drupal\Core\Access\CsrfTokenGenerator $token_generator
   *   The CSRF token generator.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, AccountInterface $account, CsrfTokenGenerator $token_generator) {
    $this->entityTypeManager = $entity_type_manager;
    $this->currentUser = $account;
    $this->tokenGenerator = $token_generator;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager'),
      $container->get('current_user'),
      $container->get('csrf_token')
    );
  }

  /**
   * Process the resource request.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param \Drupal\jsonapi\ResourceType\ResourceType[] $resource_types
   *   The route resource types.
   *
   * @return \Drupal\jsonapi\ResourceResponse
   *   The response.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function process(Request $request, array $resource_types) {
    $user_storage = $this->entityTypeManager->getStorage('user');
    $current_user = $user_storage->load($this->currentUser->id());
    assert($current_user instanceof UserInterface);
    $resource_type = reset($resource_types);

    $links = new LinkCollection([]);
    $primary_data = new ResourceObject(
      $current_user,
      $resource_type,
      $current_user->uuid(),
      NULL,
      [
        'displayName' => $current_user->getDisplayName(),
        'roles' => $current_user->getRoles(TRUE),
        'token' => $this->tokenGenerator->get(CsrfRequestHeaderAccessCheck::TOKEN_KEY),
      ],
      $links
    );
    $top_level_data = new ResourceObjectData([$primary_data], 1);
    $response = $this->createJsonapiResponse($top_level_data, $request);
    $response->addCacheableDependency((new CacheableMetadata())->addCacheContexts(['user']));
    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public function getRouteResourceTypes(Route $route, string $route_name): array {
    $fields = [
      'displayName' => new ResourceTypeAttribute('displayName'),
      // @todo: convert this to a ResourceTypeRelationship.
      'roles' => new ResourceTypeAttribute('roles', NULL, TRUE, FALSE),
      'token' => new ResourceTypeAttribute('token'),
    ];
    $resource_type = new ResourceType('current_user', 'current_user', NULL, FALSE, TRUE, TRUE, FALSE, $fields);
    // @todo: Add role entities as a relatable resource type.
    $resource_type->setRelatableResourceTypes([]);
    return [$resource_type];
  }

}
