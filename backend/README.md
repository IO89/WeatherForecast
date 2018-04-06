To launch backend use following commands in terminal:

sudo docker build -t weatherapp_backend .

sudo docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend