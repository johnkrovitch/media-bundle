include etc/make/assets.mk
include etc/make/tests.mk

install: composer.install

composer.install:
	composer install
