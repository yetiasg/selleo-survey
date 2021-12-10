FROM node:16-alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run prod:build

FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY --from=builder /app/dist ./
CMD ["npm", "run", "prod:run"]