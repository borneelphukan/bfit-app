ARG NODE_VERSION=20.18.0

FROM node:${NODE_VERSION}-slim AS base

ARG PORT=3000

# Set working directory to /src
WORKDIR /src

# Build
FROM base AS build

COPY --link package.json package-lock.json ./
RUN npm install

COPY --link . .

RUN npm run build

# Run
FROM base

ENV PORT=$PORT
ENV NODE_ENV=production

# Copy the Nuxt build output from the build stage to the final image
COPY --from=build /src/.output /app/.output

CMD [ "node", "/app/.output/server/index.mjs" ]