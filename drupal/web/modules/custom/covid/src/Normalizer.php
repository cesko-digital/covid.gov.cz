<?php


namespace Drupal\covid;


use Drupal\Core\TypedData\Plugin\DataType\StringData;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\serialization\Normalizer\TypedDataNormalizer;

class Normalizer extends TypedDataNormalizer {

  public function normalize($object, $format = NULL, array $context = []) {
    $data = parent::normalize($object, $format, $context);

    if ($object instanceof StringData && ($parent = $object->getParent()) instanceof LinkItem && $object->getString() === "") {
      $parsedUrl = parse_url($parent->get('uri')->getValue());
      $url = '';
      foreach (['host', 'path'] as $part) {
        if (isset($parsedUrl[$part])) {
          $url .= $parsedUrl[$part];
        }
      }
      return $url;
    }

    return $data;
  }


}
