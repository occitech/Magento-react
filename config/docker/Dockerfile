FROM occitech/magento:php5.4-apache

MAINTAINER occitech <contact@occitech.fr>

RUN a2enmod ssl
ADD ./default.conf /etc/apache2/sites-available/000-default.conf
EXPOSE 443

COPY ./bin/set-base-url /usr/local/bin/set-base-url