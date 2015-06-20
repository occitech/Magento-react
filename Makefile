SHELL = /bin/bash

MAGERUN = docker-compose run --rm web n98-magerun
COMPOSER = docker-compose run --rm web composer -d="../"

dev_setup: mage_symlinks modman_deploy

composer_install:
	@${COMPOSER} install --prefer-dist -n
	@make modman_deploy

modman_deploy:
	@${COMPOSER} modman

open_web:
	@make open container=web port=80

open:
	@URL="http://127.0.0.1"$$(docker-compose port $(container) $(port) 2>/dev/null | sed s/0.0.0.0//); \
	$$(if [ $$(uname) != 'Darwin' ]; then echo 'xdg-'; fi)open $$URL

mage_symlinks:
	@docker-compose run --rm web n98-magerun dev:symlinks --on --global

mage_local_xml:
	@if test -f htdocs/app/etc/local.xml; then rm htdocs/app/etc/local.xml; fi
	@docker-compose run --rm web /bin/bash -c 'n98-magerun local-config:generate $${DB_1_PORT_3306_TCP_ADDR} root $${DB_1_ENV_MYSQL_ROOT_PASSWORD} magento files gestionboutique';

mage_base_url:
	@docker-compose run --rm web set-base-url $$(docker-compose port web 80 2>/dev/null | sed s/0.0.0.0://)  $$(docker-compose port web 443 2>/dev/null | sed s/0.0.0.0://);

docker_run:
	@docker-compose up -d
	@sleep 5
	@make mage_local_xml
	@make mage_base_url
	@make open_web