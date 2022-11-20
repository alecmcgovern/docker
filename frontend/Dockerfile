# Use a Node 16 base image
FROM node:16

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .

# Install npm dependencies
RUN npm i 

# Expose the port on which the app will be running
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]