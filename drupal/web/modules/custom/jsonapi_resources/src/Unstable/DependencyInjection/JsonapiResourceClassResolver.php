<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\DependencyInjection;

use Drupal\Core\DependencyInjection\ClassResolver;
use Drupal\jsonapi_resources\Resource\EntityQueryResourceBase;
use Drupal\jsonapi_resources\Resource\EntityResourceBase;
use Drupal\jsonapi_resources\Resource\ResourceBase;
use Drupal\jsonapi_resources\Unstable\Entity\ResourceObjectToEntityMapperAwareInterface;

/**
 * Injects JSON:API resource dependencies that are internal to this module.
 *
 * Many of the injected dependencies should not need to be injected by children
 * of this module's resource base classes because they would leak internal
 * implementation details and doing so would impose an unnecessary BC burden on
 * this module.
 *
 * @internal
 */
final class JsonapiResourceClassResolver extends ClassResolver {

  /**
   * {@inheritdoc}
   */
  public function getInstanceFromDefinition($definition) {
    $instance = parent::getInstanceFromDefinition($definition);
    if ($instance instanceof ResourceBase) {
      $this->injectResourceDependencies($instance);
    }
    return $instance;
  }

  /**
   * Injects resource dependencies.
   *
   * @param \Drupal\jsonapi_resources\Resource\ResourceBase $resource
   *   The JSON:API resource.
   */
  protected function injectResourceDependencies(ResourceBase $resource) {
    $resource->setResourceTypeRepository($this->container->get('jsonapi.resource_type.repository'));
    $resource->setResourceResponseFactory($this->container->get('jsonapi_resources.resource_response_factory'));
    $resource->setDocumentExtractor($this->container->get('jsonapi_resources.document_extractor'));
    if ($resource instanceof EntityResourceBase) {
      $resource->setEntityTypeManager($this->container->get('entity_type.manager'));
      $resource->setEntityAccessChecker($this->container->get('jsonapi_resources.entity_access_checker'));
    }
    if ($resource instanceof EntityQueryResourceBase) {
      $resource->setCacheabilityCapturingExecutor($this->container->get('jsonapi_resources.entity_query_executor'));
    }
    if ($resource instanceof ResourceObjectToEntityMapperAwareInterface) {
      $resource->setResourceObjectToEntityMapper($this->container->get('jsonapi_resources.resource_object_to_entity_mapper'));
    }
  }

}
