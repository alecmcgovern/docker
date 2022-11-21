# Use a Node 16 base image
FROM node:14

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# Install npm dependencies
RUN npm i 

# Expose the port on which the app will be running
EXPOSE 4000

# Start the app
CMD [ "node", "index.js" ]