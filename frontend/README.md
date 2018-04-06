To launch front-end side of app execute following commands in terminal:

 sudo docker build -t weatherapp-front .

 sudo docker run --rm -i -p 4000:4000 --name weatherapp-front -t weatherapp-front