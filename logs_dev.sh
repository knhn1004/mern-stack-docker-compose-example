#!/bin/bash

docker-compose --file docker-compose.dev.yml logs --follow client server
