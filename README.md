# App might be started by Ansible playbook or Docker-compose up

# To launch App run in your terminal:
docker-compose up
# Note that it will run on https://0.0.0.0:8000/
# To stop App run in your terminal :
docker-compose down
# To launch Ansible playbook run in your terminal, it will ask for your sudo password:
ansible-playbook --ask-sudo-pass playbook.yml

# For more information check README.md in backend & frontend folders 
