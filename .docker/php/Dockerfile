FROM php:8.0

RUN apt-get update; \
    apt-get install -y \
        zlib1g-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libzip-dev \
        libpng-dev \
        wget ;

RUN docker-php-ext-configure gd; \
    docker-php-ext-install -j$(nproc) gd; \
    docker-php-ext-install zip; \
    docker-php-ext-install pdo_mysql;

WORKDIR /var/www/app

COPY ./app/composer.json .
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PATH="${PATH}:/root/.composer/vendor/bin"

RUN composer update
RUN wget https://get.symfony.com/cli/installer -O - | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony
