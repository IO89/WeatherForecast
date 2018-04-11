### To launch front-end side of app execute following commands in terminal:
# Building a container:
 sudo docker build -t weatherapp_front .
# Run container on port 8000 and remove when exit
 sudo docker run --rm -i -p 8000:8000 --name weatherapp_front -t weatherapp_front
 # Run container with volume
sudo docker run --rm -p 8000:8000 -v $(pwd):/src/frontend --name weatherapp_front -t weatherapp_front
# Client side receive lat and lon from a browser and then make a GET request to backend with parmaters, afterwards suppose to receive weather data for user location. Weather data is weather today and next 3 and 6 hours.