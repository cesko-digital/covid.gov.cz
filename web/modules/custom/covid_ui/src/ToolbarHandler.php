<?php


namespace Drupal\covid_ui;


use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Menu\MenuLinkTreeInterface;
use Drupal\Core\Menu\MenuTreeParameters;
use Drupal\Core\Security\TrustedCallbackInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ToolbarHandler implements ContainerInjectionInterface, TrustedCallbackInterface {

  /**
   * @var \Drupal\Core\Menu\MenuLinkTreeInterface
   */
  private $menuLinkTree;

  /**
   * ToolbarHandler constructor.
   */
  public function __construct(MenuLinkTreeInterface $menuLinkTree) {
    $this->menuLinkTree = $menuLinkTree;
  }


  /**
   * {@inheritDoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('toolbar.menu_tree')
    );
  }

  public function lazyBuilder() {
    $parameters = new MenuTreeParameters();
    $parameters->onlyEnabledLinks()->excludeRoot();

    $tree = $this->menuLinkTree->load('covid', $parameters);

    $subtree = reset($tree)->subtree;

    $manipulators = [
      ['callable' => 'menu.default_tree_manipulators:checkAccess'],
      ['callable' => 'menu.default_tree_manipulators:generateIndexAndSort']
    ];
    $subtree = $this->menuLinkTree->transform($subtree, $manipulators);

    $build = $this->menuLinkTree->build($subtree);

    $build['#attributes']['class'][] = 'toolbar-menu';

    return $build;
  }

  public static function trustedCallbacks() {
    return ['lazyBuilder'];
  }
}
