# Using node version 6 with alpine
FROM node:9-alpine
# App  listens port 3000 but should launch on port 80
EXPOSE 4000
# Create dir for app
RUN mkdir -p /usr/src/front
# Change work dir
WORKDIR /usr/src/front
# Copy package.json
COPY package.json package.json
# Copy everything from current dir to Image dir 
COPY . .

RUN npm install
# Start container with command tini --node ./src/index.jsx
CMD ["npm","start"]