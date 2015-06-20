FROM occitech/magento:php5.4-apache

MAINTAINER occitech <contact@occitech.fr>

COPY ./bin/set-base-url /usr/local/bin/set-base-url

RUN curl -sS http://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer

RUN apt-get update && \
	apt-get install -y libv8-dev g++&& \
	rm -rf /var/lib/apt/lists/*

RUN pecl install v8js-0.1.3 \
	&& echo "extension=v8js.so" > /usr/local/etc/php/conf.d/ext-v8js.ini
RUN pecl install zip \
	&& echo "extension=zip.so" > /usr/local/etc/php/conf.d/ext-zip.ini