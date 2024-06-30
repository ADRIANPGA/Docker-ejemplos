# Ejemplos

## En Play with Docker

Copiar con control alt c o control ins (0 numpad)
Pegar con control shift v o alt ins (0 numpad)

## Comandos basicos

docker search hello-world
docker search --help
docker search --no-trunc

docker pull hello-world
docker pull busybox

docker images
docker image ls

docker tag f85c52d55485 adrianpga/ejemplo-python:latest
docker push adrianpga/ejemplo-python:latest

docker pull adrianpga/ejemplo-python:1.0.0

NO docker run ubuntu porque no tiene proceso que ejecutar

docker run -it ubuntu
docker run -i -t ubuntu

docker start
docker stop
docker exec -it ubuntu bin/bash


echo "Hola, Docker!" > /home/hola_docker.txt

docker commit abc123 mi_imagen_modificada:1.0.0
docker run -it mi_imagen_modificada:1.0.0 /bin/bash

Ejercicio python flask

docker build -t python-app:latest ./
docker run -p 8181:8080  app-python:latest
curl http://127.0.0.1:8181

docker run -p 8182:8080 -d -e 'APP_PORT=600' --name 'app-python'  app-python:21.2.5

docker-compose -f .\docker-compose-escalado.yml up --build 
--scale web=2
