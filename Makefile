include .make/assets.mk
include .make/tests.mk

install: composer.install

composer.install:
	composer install
