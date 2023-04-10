FROM node:18-alpine

WORKDIR /meteo

COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY app ./app
COPY public ./public

CMD ["yarn", "dev"]