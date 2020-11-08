<?php


namespace Drupal\covid;


use Drupal\Core\TypedData\Plugin\DataType\StringData;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\serialization\Normalizer\TypedDataNormalizer;
use Drupal\text\Plugin\Field\FieldType\TextLongItem;
use Drupal\text\TextProcessed;

class Normalizer extends TypedDataNormalizer {

  public function normalize($object, $format = NULL, array $context = []) {
    $data = parent::normalize($object, $format, $context);
    $parent = $object->getParent();
    if ($object instanceof StringData && $parent instanceof LinkItem && $object->getString() === "") {
      $parsedUrl = parse_url($parent->get('uri')->getValue());
      $url = '';
      foreach (['host', 'path'] as $part) {
        if (isset($parsedUrl[$part])) {
          $url .= $parsedUrl[$part];
        }
      }
      return $url;
    } elseif ($object instanceof TextProcessed && $parent instanceof TextLongItem && $object->getName() === 'processed') {
      // Replace regular spaces.
      $output = mb_ereg_replace('(?<![<-])\b(\w(?:\b|\.?))(<? )', '\\1;\\xA0', $object->getString());
      // Replace html non-breakable spaces.
      $output = str_replace("&nsbp;", "\xA0", $output);
      return $output;
    }

    return $data;
  }


}
