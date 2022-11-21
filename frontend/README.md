## Frontend
A simple react application (create-react-app) to demonstrate how to build and run with Docker.


To run in a docker container:
```
docker build -t frontend:latest .        # build the image
docker run -p 3000:3000 frontend:latest  # run the service in a container

docker stop <CONTAINER_ID> # stop the container
```

Once both services are running, visit `localhost:3000` to view the frontend.  Click the docker icon to send a request to the backend, and see the response logged in the devtools console.