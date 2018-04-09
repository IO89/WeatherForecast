To launch front-end side of app execute following commands in terminal:
# Building a container:
 sudo docker build -t weatherapp_front .
# Run container on port 8000 and remove when exit
 sudo docker run --rm -i -p 8000:8000 --name weatherapp_front -t weatherapp_front
 # Run container with volume
sudo docker run --rm -p 8000:8000 -v $(pwd):/src/frontend --name weatherapp_front -t weatherapp_front
