# node-ts-app

## Docker

### Build Image

`docker build -t node-app-image`

`docker image ls`

### Run container

`docker run -p 8080:8080 -d --name node-app node-app-image`

`docker exec -it node-app bash`

### Shut down

`docker rm node-app -f`

`docker image rm node-app-image`