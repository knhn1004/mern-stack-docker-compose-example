#!/bin/bash

docker-compose --file docker-compose.dev.yml build && \
docker-compose --file docker-compose.dev.yml run server yarn install && \
docker-compose --file docker-compose.dev.yml run client yarn install && \

docker-compose --file docker-compose.dev.yml up -d
