<?php


namespace Drupal\covid_ui\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Menu\MenuActiveTrailInterface;
use Drupal\Core\Menu\MenuLinkInterface;
use Drupal\Core\Menu\MenuLinkTreeInterface;
use Drupal\Core\Menu\MenuTreeParameters;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AdminMenuController extends ControllerBase {

  /**
   * @var \Drupal\Core\Menu\MenuActiveTrailInterface
   */
  private $menuActiveTrail;

  /**
   * @var \Drupal\Core\Menu\MenuLinkTreeInterface
   */
  private $menu_tree;

  /**
   * AdminMenuController constructor.
   *
   * @param \Drupal\Core\Menu\MenuActiveTrailInterface $menuActiveTrail
   * @param \Drupal\Core\Menu\MenuLinkTreeInterface $menu_tree
   */
  public function __construct(MenuActiveTrailInterface $menuActiveTrail, MenuLinkTreeInterface $menu_tree) {
    $this->menuActiveTrail = $menuActiveTrail;
    $this->menu_tree = $menu_tree;
  }

  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('menu.active_trail'),
      $container->get('menu.link_tree')
    );
  }

  /**
   * @return array
   */
  public function adminMenuBlockPage(): array {
    $link = $this->menuActiveTrail->getActiveLink('covid');
    $content = $this->getMenuBlock($link);

    if ($link && $content) {
      $output = [
        '#theme' => 'admin_block_content',
        '#content' => $content,
      ];
    }
    else {
      $output = [
        '#markup' => t('You do not have any administrative items.'),
      ];
    }
    return $output;
  }

  /**
   * @param \Drupal\Core\Menu\MenuLinkInterface $link
   *
   * @return array
   */
  public function getMenuBlock(MenuLinkInterface $link): array {
    $link_id = $link->getPluginId();

    $parameters = new MenuTreeParameters();
    $parameters->setRoot($link_id)
      ->excludeRoot()
      ->setTopLevelOnly()
      ->onlyEnabledLinks();
    $tree = $this->menu_tree->load(NULL, $parameters);

    $content = [];
    foreach ($tree as $key => $element) {
      $link = $element->link;
      $content[$key]['title'] = $link->getTitle();
      $content[$key]['options'] = $link->getOptions();
      $content[$key]['description'] = $link->getDescription();
      $content[$key]['url'] = $link->getUrlObject();
    }
    ksort($content);

    return $content;
  }

}
