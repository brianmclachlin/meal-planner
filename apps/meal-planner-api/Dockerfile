FROM node:16.13-alpine AS base
ARG PNPM_VERSION=6.29.1
RUN npm --global install pnpm@${PNPM_VERSION}

FROM base AS development
WORKDIR /usr/src/app
COPY pnpm-lock.yaml ./
RUN pnpm fetch --dev
COPY . .
RUN pnpm install --filter "@meal-planner/api..." --frozen-lockfile --unsafe-perm
RUN pnpm build --filter "@meal-planner/api^..."
RUN pnpm build --filter "@meal-planner/api"


FROM base AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "dist/main"]