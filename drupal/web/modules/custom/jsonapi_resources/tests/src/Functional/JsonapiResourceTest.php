<?php

namespace Drupal\Tests\jsonapi_resources\Functional;

use Drupal\comment\Tests\CommentTestTrait;
use Drupal\Component\Serialization\Json;
use Drupal\Component\Utility\NestedArray;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\node\Entity\NodeType;
use Drupal\Tests\BrowserTestBase;
use Drupal\Tests\field\Traits\EntityReferenceTestTrait;
use Drupal\Tests\jsonapi\Functional\JsonApiRequestTestTrait;
use Drupal\Tests\jsonapi\Functional\ResourceResponseTestTrait;
use Drupal\user\Entity\Role;
use Drupal\user\Entity\User;
use Drupal\user\RoleInterface;
use GuzzleHttp\RequestOptions;

/**
 * Tests JSON:API Resource processors.
 *
 * @group jsonapi_resources
 */
class JsonapiResourceTest extends BrowserTestBase {

  use JsonApiRequestTestTrait;
  use ResourceResponseTestTrait;
  use EntityReferenceTestTrait;
  use CommentTestTrait;

  /**
   * The account to use for authentication.
   *
   * @var null|\Drupal\Core\Session\AccountInterface
   */
  protected $account;

  /**
   * {@inheritdoc}
   */
  protected $defaultTheme = 'stark';

  /**
   * {@inheritdoc}
   */
  protected static $modules = [
    'basic_auth',
    'node',
    'comment',
    'path',
    'jsonapi_resources',
    'jsonapi_resources_test',
  ];

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();

    // Ensure the anonymous user role has no permissions at all.
    $user_role = Role::load(RoleInterface::ANONYMOUS_ID);
    foreach ($user_role->getPermissions() as $permission) {
      $user_role->revokePermission($permission);
    }
    $user_role->save();
    assert([] === $user_role->getPermissions(), 'The anonymous user role has no permissions at all.');

    // Ensure the authenticated user role has no permissions at all.
    $user_role = Role::load(RoleInterface::AUTHENTICATED_ID);
    foreach ($user_role->getPermissions() as $permission) {
      $user_role->revokePermission($permission);
    }
    $user_role->save();
    assert([] === $user_role->getPermissions(), 'The authenticated user role has no permissions at all.');

    // Create test bundles and and entity references and rebuild routes.
    NodeType::create([
      'name' => 'article',
      'type' => 'article',
    ])->save();
    NodeType::create([
      'name' => 'reminder',
      'type' => 'reminder',
    ])->save();

    $this->createEntityReferenceField(
      'user',
      'user',
      'field_reminders',
      'Reminders',
      'node',
      'default',
      [
        'target_bundles' => [
          'reminder' => 'reminder',
        ],
      ],
      FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED
    );

    // Create a comment field on the article bundle.
    $this->addDefaultCommentField('node', 'article', 'comment');

    $this->container->get('router.builder')->rebuildIfNeeded();

    // Create an account, which tests will use. Also ensure the @current_user
    // service this account, to ensure certain access check logic in tests works
    // as expected.
    $this->account = $this->createUser();
    $this->container->get('current_user')->setAccount($this->account);
  }

  /**
   * Tests the custom Add Reminder resource.
   */
  public function testAddReminderResource() {
    $this->config('jsonapi.settings')->set('read_only', FALSE)->save(TRUE);

    $this->grantPermissionsToTestedRole([
      'access content',
      'create reminder content',
    ]);

    $url = Url::fromUri(sprintf('internal:/jsonapi/user/%s/reminders', $this->account->id()));
    $request_options = [];
    $request_options[RequestOptions::HEADERS]['Accept'] = 'application/vnd.api+json';
    $request_options[RequestOptions::HEADERS]['Content-Type'] = 'application/vnd.api+json';
    $request_options = NestedArray::mergeDeep($request_options, $this->getAuthenticationRequestOptions());
    $request_options[RequestOptions::JSON] = [
      'data' => [
        'type' => 'node--reminder',
        'attributes' => [
          'title' => "Don't panic.",
        ],
      ],
    ];
    $response = $this->request('POST', $url, $request_options);
    $this->assertSame(201, $response->getStatusCode(), $response->getBody());
    $this->assertTrue($response->hasHeader('Location'));
    $created_url = Url::fromUri($response->getHeader('Location')[0]);
    $response = $this->request('GET', $created_url, $request_options);
    $this->assertSame(200, $response->getStatusCode(), $response->getBody());
    $document = Json::decode((string) $response->getBody());
    $exists = FALSE;
    $owner_id = NestedArray::getValue($document, explode('/', 'data/relationships/uid/data/id'), $exists);
    $this->assertTrue($exists);
    $this->assertSame(User::load($this->account->id())->uuid(), $owner_id);
  }

  /**
   * Tests the custom Featured Nodes resource.
   */
  public function testFeaturedNodesResource() {
    $promoted_nodes = [];
    for ($i = 0; $i < 8; $i++) {
      $promoted = ($i % 2 === 0);
      $node = Node::create([
        'type' => 'article',
        'title' => $this->randomString(),
        'status' => 1,
        'promote' => $promoted ? 1 : 0,
      ]);
      $node->save();
      if ($promoted) {
        $promoted_nodes[$node->uuid()] = $node;
      }
    }
    $this->grantPermissionsToTestedRole([
      'access content',
      'access user profiles',
    ]);

    $url = Url::fromUri('internal:/jsonapi/featured-content');
    $request_options = [];
    $request_options[RequestOptions::HEADERS]['Accept'] = 'application/vnd.api+json';
    $request_options = NestedArray::mergeDeep($request_options, $this->getAuthenticationRequestOptions());
    $response = $this->request('GET', $url, $request_options);

    $this->assertSame(200, $response->getStatusCode(), var_export(Json::decode((string) $response->getBody()), TRUE));
    $response_document = Json::decode((string) $response->getBody());

    $this->assertCount(4, $response_document['data']);
    $this->assertSame(array_keys($promoted_nodes), array_map(static function (array $data) {
      return $data['id'];
    }, $response_document['data']));
  }

  /**
   * Tests the Author Content resource.
   */
  public function testAuthorContentResource() {
    $author_user = $this->account;
    $node1 = Node::create([
      'type' => 'article',
      'title' => $this->randomString(),
      'status' => 1,
      'uid' => $author_user->id(),
    ]);
    $node1->save();
    $node2 = Node::create([
      'type' => 'article',
      'title' => $this->randomString(),
      'status' => 1,
      'uid' => $author_user->id(),
    ]);
    $node2->save();

    $this->grantPermissionsToTestedRole([
      'access content',
    ]);

    $url = Url::fromUri(sprintf('internal:/jsonapi/user/%s/content', $author_user->id()));
    $request_options = [];
    $request_options[RequestOptions::HEADERS]['Accept'] = 'application/vnd.api+json';
    $request_options = NestedArray::mergeDeep($request_options, $this->getAuthenticationRequestOptions());
    $response = $this->request('GET', $url, $request_options);

    $this->assertSame(200, $response->getStatusCode(), var_export(Json::decode((string) $response->getBody()), TRUE));
    $response_document = Json::decode((string) $response->getBody());
    $this->assertCount(2, $response_document['data']);
    $this->assertArrayHasKey('included', $response_document);
    $this->assertNotEmpty($response_document['included']);

    $url = Url::fromUri(sprintf('internal:/jsonapi/user/%s/content?page[limit]=1', $author_user->id()));
    $response = $this->request('GET', $url, $request_options);
    $this->assertSame(200, $response->getStatusCode(), var_export(Json::decode((string) $response->getBody()), TRUE));
    $response_document = Json::decode((string) $response->getBody());
    $this->assertCount(1, $response_document['data']);
    $this->assertArrayHasKey('included', $response_document);
    $this->assertNotEmpty($response_document['included']);
    $this->assertArrayHasKey('next', $response_document['links']);
    $this->assertArrayHasKey('last', $response_document['links']);
    $this->assertSame($node1->uuid(), $response_document['data'][0]['id']);

    $url = Url::fromUri($response_document['links']['next']['href']);
    $response = $this->request('GET', $url, $request_options);
    $this->assertSame(200, $response->getStatusCode(), var_export(Json::decode((string) $response->getBody()), TRUE));
    $response_document = Json::decode((string) $response->getBody());
    $this->assertCount(1, $response_document['data']);
    $this->assertSame($node2->uuid(), $response_document['data'][0]['id']);
  }

  /**
   * Tests the Current User Info resource.
   */
  public function testCurrentUserInfoResource() {
    $role_id = $this->drupalCreateRole([]);
    $this->account->addRole($role_id);
    $this->account->setEmail('test@example.com');
    $this->account->save();

    $url = Url::fromUri('internal:/jsonapi/me');
    $request_options = [];
    $request_options[RequestOptions::HEADERS]['Accept'] = 'application/vnd.api+json';
    $request_options = NestedArray::mergeDeep($request_options, $this->getAuthenticationRequestOptions());
    $response = $this->request('GET', $url, $request_options);

    $this->assertSame(200, $response->getStatusCode(), var_export(Json::decode((string) $response->getBody()), TRUE));
    $response_document = Json::decode((string) $response->getBody());

    $this->assertEquals($this->account->uuid(), $response_document['data']['id']);
    $attributes = $response_document['data']['attributes'];
    $this->assertEquals($this->account->getDisplayName(), $attributes['displayName']);
    $this->assertEquals([$role_id], $attributes['roles']);
    $this->assertNotEmpty($attributes['token']);
  }

  /**
   * Tests the custom Add Comment resource.
   */
  public function testAddCommentResource() {
    $this->config('jsonapi.settings')->set('read_only', FALSE)->save(TRUE);

    $this->grantPermissionsToTestedRole([
      'access content',
      'access comments',
      'post comments',
    ]);

    $author_user = $this->account;
    $node = Node::create([
      'type' => 'article',
      'title' => $this->randomString(),
      'status' => 1,
      'uid' => $author_user->id(),
    ]);
    $node->save();

    $url = Url::fromUri(sprintf('internal:/jsonapi/comment/add'));
    $request_options = [];
    $request_options[RequestOptions::HEADERS]['Accept'] = 'application/vnd.api+json';
    $request_options[RequestOptions::HEADERS]['Content-Type'] = 'application/vnd.api+json';
    $request_options = NestedArray::mergeDeep($request_options, $this->getAuthenticationRequestOptions());
    $request_options[RequestOptions::JSON] = [
      'data' => [
        'type' => 'comment--comment',
        'attributes' => [
          'entity_type' => 'node',
          'field_name' => 'comment',
          'subject' => 'Dramallama',
          'status' => 1,
          'comment_body' => [
            'value' => 'Llamas are awesome.',
            'format' => 'plain_text',
          ],
        ],
        'relationships' => [
          'entity_id' => [
            'data' => [
              'type' => 'node--article',
              'id' => $node->uuid(),
            ],
          ],
        ],
      ],
    ];
    $response = $this->request('POST', $url, $request_options);
    $this->assertSame(201, $response->getStatusCode(), $response->getBody());
    $this->assertTrue($response->hasHeader('Location'));
    $created_url = Url::fromUri($response->getHeader('Location')[0]);
    $response = $this->request('GET', $created_url, $request_options);
    $this->assertSame(200, $response->getStatusCode(), $response->getBody());
    $document = Json::decode((string) $response->getBody());
    $exists = FALSE;
    $article_uuid = NestedArray::getValue($document, explode('/', 'data/relationships/entity_id/data/id'), $exists);
    $this->assertTrue($exists);
    $this->assertSame($node->uuid(), $article_uuid);
  }

  /**
   * Grants permissions to the authenticated role.
   *
   * @param string[] $permissions
   *   Permissions to grant.
   */
  protected function grantPermissionsToTestedRole(array $permissions) {
    $this->grantPermissions(Role::load(RoleInterface::AUTHENTICATED_ID), $permissions);
  }

  /**
   * Returns Guzzle request options for authentication.
   *
   * @return array
   *   Guzzle request options to use for authentication.
   *
   * @see \GuzzleHttp\ClientInterface::request()
   */
  protected function getAuthenticationRequestOptions() {
    return [
      'headers' => [
        'Authorization' => 'Basic ' . base64_encode($this->account->name->value . ':' . $this->account->passRaw),
      ],
    ];
  }

}
