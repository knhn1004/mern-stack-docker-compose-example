# building state-------------------------------
FROM node:14-slim as builder

EXPOSE 80

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# serving state-------------------------------
FROM nginx:1.16.0-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
