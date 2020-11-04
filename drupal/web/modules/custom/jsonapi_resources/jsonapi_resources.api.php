<?php

/**
 * @file
 * Documentation related to JSON:API Resources.
 */

/**
 * @defgroup jsonapi_resources_architecture JSON:API Resources Architecture
 * @{
 *
 * @section overview Overview
 * The JSON:API Resources module provides an integration with Drupal core's
 * JSON:API module, which is itself an implementation of the JSON:API
 * specification. Drupal core's JSON:API does not allow modules to create their
 * own URLs that leverage JSON:API. This module provides such an API. It may in
 * future be merged into Drupal core itself, at which point it will become
 * obsolete.
 *
 * Modules may define their own JSON:API compliant routes by defining routes as
 * usual in a module.routing.yml file. However, instead of providing a
 * _controller route default, they should specify a _jsonapi_resource route
 * default instead. The object referenced by the _jsonapi_resource route default
 * is known as a JSON:API resource processor.
 *
 * Every JSON:API resource processor must extend the
 * \Drupal\jsonapi_resources\Resource\ResourceBase class or one of its children.
 * In future, an interface may be added to allow for processors which do not
 * extend this class. For now, it exists so that this module can add and
 * change methods as needed while this module's use-case is explored and its
 * approach is validated.
 *
 * @section backwards_compatibility Backwards Compatibility
 * Much of the code in this module belongs to the Unstable namespace. All code
 * in this namespace is reserved for internal purposes and is not part of this
 * module's public PHP API. Modules should not depend on any of this code. If
 * some new behavior is needed, or some behavior needs to be
 * alterable/overridable, please open a feature request issue in this module's
 * issue queue.
 *
 * Code that is *outside* the Unstable namespace *is* considered part of this
 * module's public PHP API. Modules may depend on any classes and methods
 * outside of the Unstable namespace. All attempts will be made to ensure that
 * no breaking changes are introduced in minor or patch releases of this module.
 *
 * @see https://www.drupal.org/project/issues/jsonapi_resources
 * @see https://drupalize.me/videos/semantic-versioning
 */
