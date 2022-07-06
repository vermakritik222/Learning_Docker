FROM alpine

RUN apk add --update nodejs npm

RUN apk add --update npm

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install

CMD ["npm","run","dev" ]