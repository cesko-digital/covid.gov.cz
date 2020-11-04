<?php
namespace Deployer;

require 'recipe/drupal8.php';

set('default_timeout', 600);

// Project name
set('application', 'covid.vantuch.cz');

// Project repository
set('repository', 'git@github.com:cesko-digital/covid.gov.cz.git');

set('http_user', 'covid');

// Shared files/dirs between deploys
set('shared_files', [
  'drupal/web/sites/{{drupal_site}}/settings.php',
  'drupal/web/sites/{{drupal_site}}/services.yml',
  'drupal/.env'
]);

set('shared_dirs', [
  'drupal/private',
  'drupal/web/sites/{{drupal_site}}/files'
]);

set('writable_dirs', [
  'drupal/web/sites/{{drupal_site}}/files',
  'drupal/web/sites/{{drupal_site}}/files/translations'
]);

//set('writable_use_sudo', true);

set('allow_anonymous_stats', false);

set('drush', 'drupal/vendor/bin/drush');

// Hosts

host('smitka')
  ->hostname('89.221.223.20')
  ->port('9022')
  ->user('covid')
  ->stage('staging')
  ->set('deploy_path', '/home/covid/htdocs');

// Tasks
task('deploy:composer', 'cd drupal && composer install --no-dev --no-progress --optimize-autoloader');


// Separated to find which one fails deploy
task('deploy:drush:cr', '{{drush}} cr')->once();
task('deploy:drush:cim', '{{drush}} cim -y;')->once();
task('deploy:drush:entup', '{{drush}} entup -y;')->once();
task('deploy:drush:updb', '{{drush}} updb -y;')->once();

task('deploy:drush', [
  'deploy:drush:cr',
  'deploy:drush:updb',
//  'deploy:drush:cim',
  'deploy:drush:cr',
]);

// Override the default
task('deploy', [
  'deploy:info',
  'deploy:prepare',
  'deploy:lock',
  'deploy:release',
  'deploy:update_code',
  'deploy:composer',
  'deploy:shared',
  'deploy:drush',
  'deploy:symlink',
  'deploy:unlock',
  'cleanup'
]);

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

