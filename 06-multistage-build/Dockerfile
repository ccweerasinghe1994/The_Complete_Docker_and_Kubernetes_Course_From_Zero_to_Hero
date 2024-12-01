ARG NODE_VERSION=22.6.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY src src

COPY tsconfig.json .

RUN npm run build


FROM node:${NODE_VERSION}-alpine AS deps

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

FROM gcr.io/distroless/nodejs22

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules node_modules
COPY --from=build /usr/src/app/dist dist

ENV PORT=3000

CMD ["dist/index.js"]
