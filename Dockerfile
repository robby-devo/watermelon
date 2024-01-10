FROM node:16.20.1 AS ui-build

WORKDIR /app

COPY ./ /app/

RUN npm install \
    && npm run build


From ubuntu/apache2

WORKDIR /var/www/html

COPY --from=ui-build /app/build /var/www/html

EXPOSE 80