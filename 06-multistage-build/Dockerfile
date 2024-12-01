ARG NODE_VERSION=22.6.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY src src

COPY tsconfig.json .

RUN npm run build

FROM gcr.io/distroless/nodejs22

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules node_modules
COPY --from=build /usr/src/app/dist dist

ENV PORT=3000

CMD ["dist/index.js"]
