# OS: MACOS

# docker build -t node-image .

# docker run -v $(pwd):/app -v /app/node_modules -d -p 3300:3000 --name node-app node-image

# read only bind mounts: docker run -v $(pwd):/app:ro -v /app/node_modules -d -p 3300:3000 --name node-app node-image

# environment variables:

## docker run -v $(pwd):/app -v /app/node_modules --env-file ./.env -p 3300:4001 -d --name node-app node-image

## docker run -v $(pwd):/app -v /app/node_modules --env PORT=4000 -p 3300:4000 -d --name node-app node-image

# docker-compose:

## docker-compose up -d

## docker-compose down -v

## docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

## docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# scale:

## docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale node-app=2

# docker hub

## docker login

## docker image tag node-docker-mongo-redis_node-app amunra1102/node-mongo-redis-app

## docker push amunra1102/node-mongo-redis-app

## docker-compose -f docker-compose.yml -f docker-compose.prod.yml build node-app

## docker-compose -f docker-compose.yml -f docker-compose.prod.yml push node-app
