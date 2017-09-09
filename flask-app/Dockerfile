# Use an official Python runtime as a parent image
FROM python:3.6.2

# Set the working directory to /app
WORKDIR /flask-app

# Copy the current directory contents into the container at /flask-app
ADD . /flask-app

# Install any needed packages specified in setup.py
RUN sh ./init.sh

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NAME World

# Run debug.sh when the container launches
CMD ["sh", "./debug.sh"]
