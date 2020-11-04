<?php


namespace Drupal\covid\Entity;


use Drupal\Core\Entity\ContentEntityInterface;

interface TranslationInterface extends ContentEntityInterface {

  public function getTarget(): string;

  public function getLangcode(): string;

  public function getSource(): string;

  public function setTarget(string $target): Translation;

}
