<?php


namespace Drupal\covid;


use Drupal\Core\TypedData\Plugin\DataType\Uri;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\serialization\Normalizer\TypedDataNormalizer;

class Normalizer extends TypedDataNormalizer {

  public function normalize($object, $format = NULL, array $context = []) {
    $data = parent::normalize($object, $format, $context);

    // Remove https from link if there is no title
    if ($object instanceof Uri) {
      $parent = $object->getParent();

      if ($parent instanceof LinkItem && !$parent->get('title')->getValue()) {
        return preg_replace('#^http(s)?://#', '', $data);
      }
    }

    return $data;
  }


}
