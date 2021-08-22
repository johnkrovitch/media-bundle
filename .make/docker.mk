.PHONY: start
start:
	docker-compose up

.PHONY: build
build:
	docker-compose build

.PHONY: php
php:
	docker-compose run --rm php bash
