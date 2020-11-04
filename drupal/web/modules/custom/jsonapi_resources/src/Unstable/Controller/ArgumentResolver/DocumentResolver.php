<?php declare(strict_types = 1);

namespace Drupal\jsonapi_resources\Unstable\Controller\ArgumentResolver;

use Drupal\jsonapi\JsonApiResource\JsonApiDocumentTopLevel;
use Drupal\jsonapi_resources\Unstable\DocumentExtractor;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Controller\ArgumentValueResolverInterface;
use Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadata;

/**
 * Deserializes POST, PATCH and DELETE request documents.
 *
 * @internal
 */
final class DocumentResolver implements ArgumentValueResolverInterface {

  /**
   * The document extractor.
   *
   * @var \Drupal\jsonapi_resources\Unstable\DocumentExtractor
   */
  protected $documentExtractor;

  /**
   * Constructs a JSON:API document argument resolver.
   *
   * @param \Drupal\jsonapi_resources\Unstable\DocumentExtractor $document_extractor
   *   The document extractor.
   */
  public function __construct(DocumentExtractor $document_extractor) {
    $this->documentExtractor = $document_extractor;
  }

  /**
   * {@inheritdoc}
   */
  public function supports(Request $request, ArgumentMetadata $argument) {
    $supported_method = in_array($request->getMethod(), [
      'POST',
      'PATCH',
    ]);
    $is_delete = $request->isMethod('DELETE');
    $is_relationship = $request->attributes->has('_jsonapi_relationship_field_name');
    $supported_method = $supported_method || ($is_delete && $is_relationship);
    $supported_format = $request->getRequestFormat() === 'api_json';
    $correct_type = $argument->getType() === JsonApiDocumentTopLevel::class;
    return $supported_method && $supported_format && $correct_type;
  }

  /**
   * {@inheritdoc}
   */
  public function resolve(Request $request, ArgumentMetadata $argument) {
    yield $this->documentExtractor->getDocument($request);
  }

}
