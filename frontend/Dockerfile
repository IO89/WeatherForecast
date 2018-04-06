# Using node version 9 with alpine
FROM node:9-alpine
# App  listens port 8000
EXPOSE 8000
# Create dir for app
RUN mkdir -p /usr/src/front
# Change work dir
WORKDIR /usr/src/front
# Copy package.json
COPY package.json package.json
# Copy everything from current dir to Image dir 
COPY . .
# npm install
RUN npm install
# Start container with command tini --npm ./src/index.jsx
CMD ["npm","start"]