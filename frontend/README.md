To launch front-end side of app execute following commands in terminal:
# Building a container:
 sudo docker build -t weatherapp_front .
# Run container on port 8000 and remove when exit
 sudo docker run --rm -i -p 8000:8000 --name weatherapp-front -t weatherapp-front
