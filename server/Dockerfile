FROM node:10.16-alpine

EXPOSE 8080
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "dev"]
