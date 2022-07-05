FROM node:alpine

ENV DATABASE=mongodb://mongoadmin:<PASSWORD>@mongodb \
    DATABASE_PASSWORD=secret \
    PORT=8000 \
    NODE_ENV=development

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install

CMD ["npm","run","dev" ]