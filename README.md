# docker build -t node-image .

# docker run -v $(pwd):/app -v /app/node_modules -d -p 3300:3000 --name node-app node-image

# read only bind mounts: docker run -v $(pwd):/app:ro -v /app/node_modules -d -p 3300:3000 --name node-app node-image

# environment variables:

## docker run -v $(pwd):/app -v /app/node_modules --env-file ./.env -p 3300:4001 -d --name node-app node-image

## docker run -v $(pwd):/app -v /app/node_modules --env PORT=4000 -p 3300:4000 -d --name node-app node-image

# docker-compose:

## docker-compose up -d

## docker-compose down -v
