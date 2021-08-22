include .make/assets.mk
include .make/docker.mk
include .make/tests.mk

install: composer.install

composer.install:
	composer install
