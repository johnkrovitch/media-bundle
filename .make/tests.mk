.PHONY: tests.integration tests.phpunit phpunit.run

tests: phpunit.run php-cs-fixer.run phpstan.run

tests.integration:
	mkdir -p var/integration/
	cd var/integration/ && composer create-project symfony/website-skeleton:^4.4 media-bundle-test
	cd var/integration/media-bundle-test && ls

# PHPUnit
phpunit.run:
	bin/phpunit
	@echo "Results file generated file://$(shell pwd)/var/phpunit/coverage/index.html"

.PHONY: php-cs-fixer.install php-cs-fixer.run phpstan.run cs.fix
# php-cs-fixer
php-cs-fixer.install:
	curl -L https://cs.symfony.com/download/php-cs-fixer-v2.phar -o php-cs-fixer
	chmod +x php-cs-fixer
	mv php-cs-fixer bin

php-cs-fixer.run:
	bin/php-cs-fixer fix --allow-risky=yes

cs.fix:
	bin/php-cs-fixer fix --allow-risky=yes --diff

php-cs-fixer.ci:
	php-cs-fixer fix --dry-run --using-cache=no --verbose --diff --allow-risky=yes --config .php-cs-fixer.dist.php

# PHPStan
phpstan.run:
	bin/phpstan analyse --level=5 src

# Functional tests
.PHONY: tests.functional.install
tests.functional.install:
	php tests/fixtures/app/install.php

tests.functional.run:
	echo "WIP"

# Dumps checker
.PHONY: var-dump-checker.run
var-dump-checker.run:
	bin/var-dump-check --symfony --exclude vendor src
