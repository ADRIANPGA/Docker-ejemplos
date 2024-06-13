FROM python:3.11.9

# We need to set the host to 0.0.0.0 to allow outside access
ENV HOST 0.0.0.0
# Port to expose to run the server
EXPOSE 8080
EXPOSE 8081
EXPOSE 8082
EXPOSE 8083

# Every needed package is installed
RUN pip install Flask

# Set the working directory
WORKDIR /app
COPY ./code/server.py /app/server.py

# Web server script is run when the container is started
CMD ["python3", "server.py"]