FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "prod:build"]
RUN sleep 10

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/dist ./
CMD ["npm", "run", "prod:run"]