ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY index.js .

CMD ["node", "index.js"]

