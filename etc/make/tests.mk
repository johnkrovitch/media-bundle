.PHONY: test@integration

test@integration:
	mkdir -p var/integration/
	cd var/integration/ && composer create-project symfony/website-skeleton:^4.4 media-bundle-test
	cd var/integration/media-bundle-test && ls

test@phpunit:
	bin/phpunit
