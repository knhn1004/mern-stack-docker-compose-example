FROM node:14-slim

EXPOSE 8080

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
