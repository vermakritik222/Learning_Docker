FROM node:alpine

ENV DATABASE=mongodb://mongoadmin:<PASSWORD>@mongodb \
    DATABASE_PASSWORD=secret

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install

CMD ["npm","start" ]