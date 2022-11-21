## Backend
A simple express application to demonstrate how to build and run it with Docker.

To run in a docker container:
```
docker build -t backend:latest .        # build the image
docker run -p 4000:4000 backend:latest  # run the service in a container

docker stop <CONTAINER_ID> # stop the container
```
