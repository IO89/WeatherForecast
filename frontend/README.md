To launch front-end side of app execute following commands in terminal:

 sudo docker build -t weatherapp_front .

 sudo docker run --rm -i -p 8000:8000 --name weatherapp-front -t weatherapp-front