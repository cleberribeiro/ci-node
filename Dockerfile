FROM node:16-alpine3.15

WORKDIR /src/app

COPY . .

RUN npm i
