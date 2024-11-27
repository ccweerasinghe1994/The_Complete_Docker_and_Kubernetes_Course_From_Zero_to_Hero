ARG NODE_VERSION=22.6.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
--mount=type=bind,source=package-lock.json,target=package-lock.json \
--mount=type=cache,target=/root/.npm \
npm ci --omit=dev

FROM gcr.io/distroless/nodejs22

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules node_modules

COPY src src

CMD ["src/index.js"]
