# App might be started by Ansible playbook or Docker-compose up or trough npm i & npm start

# To launch App run in your terminal:
docker-compose up
# Note that it will run on https://0.0.0.0:8000/
# Front end runs on https and backend uses http protocol, you need to press load unsafe scripts
# And allow browser to get your location by clicking in upper right corner next to adress bar

# To stop App run in your terminal :
docker-compose down

# To launch Ansible playbook run in your terminal, it will ask for your sudo password:
ansible-playbook --ask-sudo-pass playbook.yml

# To access backend on aws run in your terminal
http GET ec2-18-219-11-223.us-east-2.compute.amazonaws.com:9000 
# To access frontend on aws run in your terminal
http GEt ec2-18-188-113-203.us-east-2.compute.amazonaws.com:8000
# To launch test run in backend folder(Suppose to receive status ok and JSON file)
npm test index.test.js

# For more detailed information check README.md files in backend & frontend folders 
