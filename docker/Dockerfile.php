FROM php:7.3-fpm

WORKDIR /

COPY ./php/php.ini  /usr/local/etc/php/php.ini
COPY ./php/www.conf /usr/local/etc/php-fpm.d/www.conf


WORKDIR /var/www/html

USER root
RUN chown www-data:www-data /var/www \
   && apt-get update && apt-get install -y nodejs apt-utils libpng-dev libjpeg-dev libwebp-dev libpq-dev default-mysql-client patch wget libzip-dev libfontconfig libxslt-dev lsof git git-core libbz2-dev vim mc libxrender1 \
   && docker-php-ext-configure bcmath --enable-bcmath \
   && docker-php-ext-configure gd --with-webp-dir=/usr --with-jpeg-dir=/usr \
   && docker-php-ext-install gd mbstring opcache pdo pdo_mysql pdo_pgsql zip xsl bz2 exif  bcmath \
   && curl -fSL "https://github.com/drush-ops/drush-launcher/releases/download/0.6.0/drush.phar" -o /usr/local/bin/drush \
   && chmod +x /usr/local/bin/drush \
   && curl -fSL "https://getcomposer.org/download/1.9.1/composer.phar" -o /usr/local/bin/composer \
   && chmod +x /usr/local/bin/composer \
   && curl -fSL "https://github.com/hechoendrupal/drupal-console-launcher/releases/download/1.9.4/drupal.phar" -o /usr/local/bin/drupal \
   && chmod +x /usr/local/bin/drupal \
   && mkdir /.composer \
   && mkdir /.config \
   && mkdir /.drush \
   && mkdir /.console \
   && chmod 777 /.composer \
   && chmod 777 /.config \
   && chmod 777 /.drush  \
   && chmod 777 /.console \
   && rm -rf /var/lib/apt/lists/*

USER www-data