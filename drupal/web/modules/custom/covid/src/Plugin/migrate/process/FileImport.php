<?php

namespace Drupal\covid\Plugin\migrate\process;

use Drupal\Core\File\FileSystemInterface;
use Drupal\Core\StreamWrapper\StreamWrapperManager;
use Drupal\Core\StreamWrapper\StreamWrapperManagerInterface;
use Drupal\migrate\MigrateException;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\MigrateSkipProcessException;
use Drupal\migrate\Plugin\migrate\process\FileCopy;
use Drupal\migrate\Plugin\MigrateProcessInterface;
use Drupal\migrate\Row;
use Drupal\file\Entity\File;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\ServerException;

/**
 * Imports a file from an local or external source.
 *
 * Files will be downloaded or copied from the source if necessary and a file
 * entity will be created for it. The file can be moved, reused, or set to be
 * automatically renamed if a duplicate exists.
 *
 * Required configuration keys:
 * - source: The source path or URI, e.g. '/path/to/foo.txt' or
 *   'public://bar.txt'.
 *
 * Optional configuration keys:
 * - destination: (recommended) The destination path or URI, example:
 *   '/path/to/bar/' or 'public://foo.txt'. To provide a directory path (to
 *   which the file is saved using its original name), a trailing slash *must*
 *   be used to differentiate it from being a filename. If no trailing slash
 *   is provided the path will be assumed to be the destination filename.
 *   Defaults to "public://".
 * - uid: The uid to attribute the file entity to. Defaults to 0
 * - move: Boolean, if TRUE, move the file, otherwise copy the file. Only
 *   applies if the source file is local. If the source file is remote it will
 *   be copied. Defaults to FALSE.
 * - rename: Boolean, if TRUE, rename the file by appending a number
 *   until the name is unique. Defaults to FALSE.
 * - reuse: Boolean, if TRUE, reuse the current file in its existing
 *   location rather than move/copy/rename the file. Defaults to FALSE.
 * - skip_on_missing_source: (optional) Boolean, if TRUE, this field will be
 *   skipped if the source file is missing (either not available locally or 404
 *   if it's a remote file). Otherwise, the row will fail with an error. Note
 *   that if you are importing a lot of remote files, this check will greatly
 *   reduce the speed of your import as it requires an http request per file to
 *   check for existence. Defaults to FALSE.
 * - skip_on_error: (optional) Boolean, if TRUE, this field will be skipped
 *   if any error occurs during the file import (including missing source
 *   files). Otherwise, the row will fail with an error. Defaults to FALSE.
 * - id_only: (optional) Boolean, if TRUE, the process will return just the id
 *   instead of a entity reference array. Useful if you want to manage other
 *   sub-fields in your migration (see example below).
 *
 * The destination and uid configuration fields support copying destination
 * values. These are indicated by a starting @ sign. Values using @ must be
 * wrapped in quotes. (the same as it works with the 'source' property).
 *
 * @see Drupal\migrate\Plugin\migrate\process\Get
 *
 * Example:
 *
 * @code
 * destination:
 *   plugin: entity:node
 * source:
 *   # assuming we're using a source plugin that lets us define fields like this
 *   fields:
 *     -
 *       name: file
 *       label: 'Some file'
 *       selector: /file
 *     -
 *       name: image
 *       label: 'Main Image'
 *       selector: /image
 *     -
 *       name: text_field_1
 *       label: 'Some Text Value'
 *       selector: /text
 *     -
 *       name: text_field_2
 *       label: 'Another Text Value'
 *       selector: /text_2
 *   constants:
 *     # Note the trailing slash indicates this destination is a directory so
 *     # the filename will be kept intact when copying
 *     file_destination: 'public://path/to/save/'
 *     # This is for creating dynamic destination paths (see below)
 *     directory_separator: '/'
 * process:
 *   uid:
 *     plugin: default_value
 *     default_value: 1
 *   #
 *   # Simple file import
 *   #
 *   field_file:
 *     plugin: file_import
 *     source: file
 *     destination: constants/file_destination
 *     uid: @uid
 *     skip_on_missing_source: true
 *   #
 *   # Custom field attributes
 *   #
 *   field_image/target_id:
 *     plugin: file_import
 *     source: image
 *     destination: constants/file_destination
 *     uid: @uid
 *     id_only: true
 *   field_image/alt: image
 *   #
 *   # Since the destination property can accept a destination value, you can
 *   # create dynamic filepaths. First you create a temporary field (you can
 *   # name this whatever you want as long as it isn't the name of a field on the
 *   # migrate destination entity/object)
 *   #
 *   _file_destination:
 *     plugin: concat
 *     source:
 *       - constants/file_destination
 *       - constants/directory_separator
 *       - '@text_field_1'
 *       - constants/directory_separator
 *       - '@text_field_2'
 *       - constants/directory_separator
 *   # Now we can use our pseudo temp field as a destination value
 *   field_file:
 *     plugin: file_import
 *     source: file
 *     destination: '@_file_destination'
 *     uid: @uid
 *     skip_on_missing_source: true
 *
 *
 * @endcode
 *
 * @see \Drupal\migrate\Plugin\MigrateProcessInterface
 *
 * @MigrateProcessPlugin(
 *   id = "file_import"
 * )
 */
class FileImport extends FileCopy {

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, array $plugin_definition, StreamWrapperManagerInterface $stream_wrappers, FileSystemInterface $file_system, MigrateProcessInterface $download_plugin) {
    $configuration += [
      'destination' => NULL,
      'uid' => NULL,
      'skip_on_missing_source' => FALSE,
      'id_only' => FALSE,
    ];
    parent::__construct($configuration, $plugin_id, $plugin_definition, $stream_wrappers, $file_system, $download_plugin);
  }

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {

    if (!$value) {
      return NULL;
    }

    // Get our file entity values.
    $source = $value;
    $destination = $this->getPropertyValue($this->configuration['destination'], $row) ?: 'public://';
    $uid = $this->getPropertyValue($this->configuration['uid'], $row) ?: 0;
    $id_only = $this->configuration['id_only'];

    // If there's no we skip.
    if (!$source) {
      return NULL;
    }
    elseif ($this->configuration['skip_on_missing_source'] && !$this->sourceExists($source)) {
      // If we have a source file path, but it doesn't exist, and we're meant
      // to just skip processing, we do so, but we log the message.
      $migrate_executable->saveMessage("Source file $source does not exist. Skipping.");
      return NULL;
    }

    // Build the destination file uri (in case only a directory was provided).
    $destination = $this->getDestinationFilePath($source, $destination);
    if (!StreamWrapperManager::getScheme($destination)) {
      if (empty($destination)) {
        $destination = \Drupal::config('system.file')->get('default_scheme')
          . '://' . preg_replace('/^\//', '', $destination);
      }
    }
    $final_destination = '';

    // If we're in re-use mode, reuse the file if it exists.
    if ($this->getOverwriteMode() == FileSystemInterface::EXISTS_ERROR && $this->isLocalUri($destination) && is_file($destination)) {
      // Look for a file entity with the destination uri.
      if ($files = \Drupal::entityTypeManager()->getStorage('file')
        ->loadByProperties(['uri' => $destination])) {
        // Grab the first file entity with a matching uri.
        // @todo: Any logic for preference when there are multiple?
        $file = reset($files);
        // Set to permanent if the file in the database is set to temporary.
        // This means that the file was probably set to be removed during
        // garbage collection, which we don't want to happen anymore since we're
        // using it.
        if (!$file->isTemporary()) {
          $file->setPermanent();
          $file->save();
        }

        return $id_only ? $file->id() : ['target_id' => $file->id()];
      }
      else {
        $final_destination = $destination;
      }
    }
    else {
      // The parent method will take care of our download/move/copy/rename.
      // We just need to final destination to create the file object.
      try {
        $final_destination = parent::transform([
          $source,
          $destination,
        ], $migrate_executable, $row, $destination_property);
      }
      catch (MigrateException $e) {
        // Check if we're skipping on error
        if ($this->configuration['skip_on_error']) {
          $migrate_executable->saveMessage("File $source could not be imported to $destination. Operation failed with message: " . $e->getMessage());
          throw new MigrateSkipProcessException($e->getMessage());
        }
        else {
          // Pass the error back on again.
          throw new MigrateException($e->getMessage());
        }
      }
    }

    if ($final_destination) {
      // Create a file entity.
      $file = File::create([
        'uri' => $final_destination,
        'uid' => $uid,
        'status' => FILE_STATUS_PERMANENT,
      ]);
      $file->save();
      return $id_only ? $file->id() : ['target_id' => $file->id()];
    }

    throw new MigrateException("File $source could not be imported to $destination");
  }

  /**
   * Gets a value from a source or destination property.
   *
   * Code is adapted from Drupal\migrate\Plugin\migrate\process\Get::transform()
   */
  protected function getPropertyValue($property, $row) {
    if ($property || (string) $property === '0') {
      $is_source = TRUE;
      if ($property[0] == '@') {
        $property = preg_replace_callback('/^(@?)((?:@@)*)([^@]|$)/', function ($matches) use (&$is_source) {
          // If there are an odd number of @ in the beginning, it's a
          // destination.
          $is_source = empty($matches[1]);
          // Remove the possible escaping and do not lose the terminating
          // non-@ either.
          return str_replace('@@', '@', $matches[2]) . $matches[3];
        }, $property);
      }
      if ($is_source) {
        return $row->getSourceProperty($property);
      }
      else {
        return $row->getDestinationProperty($property);
      }
    }
    return FALSE;
  }

  /**
   * Determines how to handle file conflicts.
   *
   * @return int
   *   FILE_EXISTS_REPLACE (default), FILE_EXISTS_RENAME, or FILE_EXISTS_ERROR
   *   depending on the current configuration.
   */
  protected function getOverwriteMode() {
    if (!empty($this->configuration['rename'])) {
      return FileSystemInterface::EXISTS_RENAME;
    }
    if (!empty($this->configuration['reuse'])) {
      return FileSystemInterface::EXISTS_ERROR;
    }

    return FileSystemInterface::EXISTS_REPLACE;
  }

  /**
   * Check if a path is a meant to be a directory.
   *
   * We're using a trailing slash to indicate the path is a directory. This is
   * so that we can create it if it doesn't exist. Without the trailing slash
   * there would be no reliable way to know whether or not the path is meant
   * to be the target filename since files don't technically _have_ to have
   * extensions, and directory names can contain periods.
   */
  protected function isDirectory($path) {
    return substr($path, -1) == '/';
  }

  /**
   * Build the destination filename.
   *
   * @param string $source
   *   The source URI.
   *
   * @param string $destination
   *   The destination URI.
   *
   * @return boolean
   *   Whether or not the file exists.
   */
  protected function getDestinationFilePath($source, $destination) {
    if ($this->isDirectory($destination)) {
      $parsed_url = parse_url($source);
      $filepath = $destination . \Drupal::service('file_system')
          ->basename($parsed_url['path']);
    }
    else {
      $filepath = $destination;
    }
    return $filepath;
  }

  /**
   * Check if a source exists.
   */
  protected function sourceExists($path) {
    if ($this->isLocalUri($path)) {
      return is_file($path);
    }
    else {
      try {
        \Drupal::httpClient()->head($path);
        return TRUE;
      }
      catch (ServerException $e) {
        return FALSE;
      }
      catch (ClientException $e) {
        return FALSE;
      }
      catch (ConnectException $e) {
        return FALSE;
      }
    }
  }

}
