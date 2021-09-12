#!/usr/bin/env bash
composer install
composer symfony:sync-recipes

bin/console doctrine:database:create --if-not-exists
bin/console doctrine:schema:update --force
bin/console assets:install --symlink

symfony server:stop
rm -rf ~/.symfony/var
symfony serve --no-tls
