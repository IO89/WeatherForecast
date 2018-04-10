###To launch backend use following commands in terminal:
# Building a container:
sudo docker build -t weatherapp_backend .
# Run container on port 9000 and remove when exit
sudo docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend
# Run container with volume
sudo docker run --rm -p 9000:9000 -v $(pwd):/src/backend --name weatherapp_backend -t weatherapp_backend

### Test supposed return status ok and response to be a JSON object
# To launch mocha tests run following command in terminal:
nodemon --exec 'npm test'
