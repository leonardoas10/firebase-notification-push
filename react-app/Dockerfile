FROM node:12-alpine
LABEL author="Leonardo Aranguren S"
ENV CI = true
RUN apk update && apk add --no-cache nano curl
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm cache clean --force
CMD ["npm", "start"]
EXPOSE 3000