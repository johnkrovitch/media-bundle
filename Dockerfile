FROM php:8.0

RUN apt-get update; \
    apt-get install -y \
        git \
        zlib1g-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libzip-dev \
        libpng-dev \
        zsh \
        wget ;

RUN docker-php-ext-configure gd; \
    docker-php-ext-install -j$(nproc) gd; \
    docker-php-ext-install zip; \
    docker-php-ext-install pdo_mysql;

WORKDIR /var/www/app

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PATH="${PATH}:/root/.composer/vendor/bin"

RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
COPY ./.docker/php/symfony.ini $PHP_INI_DIR/conf.d/symfony.ini

RUN wget https://get.symfony.com/cli/installer -O - | bash; \
    mv /root/.symfony/bin/symfony /usr/local/bin/symfony; \
    chmod +x /usr/local/bin/symfony;

COPY ./.docker/php/app/composer.json /var/www/app/composer.json
COPY ./.docker/php/app/config/packages/jk_media.yaml /var/www/app/config/packages/jk_media.yaml
COPY ./.docker/php/app/config/routes.yaml /var/www/app/config/routes.yaml
COPY ./.docker/php/app/config/bundles.php /var/www/app/config/bundles.php
COPY ./.docker/php/app/templates /var/www/app/templates
COPY ./.docker/php/app/src/Controller /var/www/app/src/Controller
COPY ./.docker/php/app/src/Form /var/www/app/src/Form

RUN composer update --no-scripts;\
    composer symfony:sync-recipes

COPY .docker/php/entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh
