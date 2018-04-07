To launch backend use following commands in terminal:
# Building a container:
sudo docker build -t weatherapp_backend .
# Run container on port 9000 and remove when exit
sudo docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend
