FROM nginx:1.19.2

WORKDIR /var/www/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/vhost.conf /etc/nginx/conf.d/01_default.conf

RUN rm /etc/nginx/conf.d/default.conf \
    && chmod -R 777 /etc/nginx/conf.d \
    && chmod -R 777 /etc/nginx/conf.d/* \
    && chmod -R 777 /var/cache \
    && chmod -R 777 /var/run

EXPOSE 8080
CMD ["bash", "-xc", "sleep 10 && exec nginx -g 'daemon off;'"]