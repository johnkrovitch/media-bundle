.PHONY: assets assets.production assets.install assets.upgrade

assets:
	yarn run encore dev

assets.watch:
	yarn run encore dev --watch

assets.production:
	yarn run encore production

assets.install:
	yarn install

assets.upgrade:
	yanr upgrade
