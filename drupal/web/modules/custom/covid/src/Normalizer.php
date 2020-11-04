<?php


namespace Drupal\covid;


use Drupal\Core\TypedData\Plugin\DataType\StringData;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\serialization\Normalizer\TypedDataNormalizer;

class Normalizer extends TypedDataNormalizer {

  public function normalize($object, $format = NULL, array $context = []) {
    $data = parent::normalize($object, $format, $context);

    if ($object instanceof StringData && ($parent = $object->getParent()) instanceof LinkItem && $object->getString() === "") {
      return preg_replace('#^http(s)?://#', '', $parent->get('uri')->getValue());
    }

    return $data;
  }


}
