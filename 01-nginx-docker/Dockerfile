# Use nginx version 1.27.0 as the base image
FROM nginx:1.27.0
# Update package lists
RUN apt-get update 
# Install vim editor without recommended packages to keep the image size smaller
RUN apt-get install --no-install-recommends -y vim
# Clean up apt cache to reduce image size
RUN rm -rf /var/lib/apt/lists/*
# Copy the index.html file to the default nginx html directory
COPY index.html /usr/share/nginx/html/index.html   
# Change the owner of the index.html file to nginx user and group
# this is not necessary, 
# but it is a good practice to change the owner of 
# the file to the user that will run the process
RUN chown nginx:nginx /usr/share/nginx/html/index.html