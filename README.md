# Docker Sample Repo

A simple repository demonstrating how Docker can be used to build and run a simple web application.

- `backend/` consists of an express server
- `frontend/` is a react application, made with `create-react-app`

## Quick Start
```
docker-compose build
docker-compose up
```

## Backend
To run in a docker container:
```
docker build -t backend:latest .        # build the image
docker run -p 4000:4000 backend:latest  # run the service in a container

docker stop <CONTAINER_ID> # stop the container
```


## Frontend
To run in a docker container:
```
docker build -t frontend:latest .        # build the image
docker run -p 3000:3000 frontend:latest  # run the service in a container

docker stop <CONTAINER_ID> # stop the container
```

Once both services are running, visit `localhost:3000` to view the frontend.  Click the docker icon to send a request to the backend, and see the response logged in the devtools console.


## Useful docker commands
```
docker images          # list all images
docker ps              # list all running containers
docker ps -a           # list all containers

docker stop <CONTAINER_ID>  # stop container
docker rm <CONTAINER_ID>    # remove container
docker rmi <IMAGE_ID>       # remove image

docker container prune      # remove all stopped containers
docker image prune          # remove all dangling (untagged and unused) images

# Dockerhub — host and access image repositories remotely
docker push <IMAGE_NAME>:<TAG>
docker pull <IMAGE_NAME>:<TAG>
```