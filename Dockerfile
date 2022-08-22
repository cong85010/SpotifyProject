FROM node:16.16.0-alpine

RUN mkdir /code/
WORKDIR /code/
COPY . /code/
RUN npm run build
