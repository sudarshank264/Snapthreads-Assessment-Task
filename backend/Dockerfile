# ---- Base image ----
FROM node:20-alpine AS base 
WORKDIR /usr/src/app

# Install dependencies required for building native modules
RUN apk add --no-cache libc6-compat python3 make g++

# ---- Dependencies ----
FROM base AS deps
COPY package*.json ./
RUN npm install --legacy-peer-deps

# ---- Build ----
FROM base AS build
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Production ----
FROM base AS prod
ENV NODE_ENV=production

# Copy only necessary files
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./

EXPOSE 4000
CMD ["node", "dist/main.js"]