FROM nginx:stable-alpine
ADD /www /usr/share/nginx/html
ADD /default.conf /etc/nginx/conf.d/
