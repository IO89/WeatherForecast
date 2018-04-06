# Using node version 6 with alpine
FROM node:9-alpine
# Enviroment viriables
ENV APP_ID  91931bbedeaee3ede7a5eb46cbd6fe21
ENV MAP_ENDPOINT  http://api.openweathermap.org/data/2.5
ENV TARGET_CITY  Helsinki,fi
ENV PORT  9000
# App  listens port 3000 but should launch on port 80
# Install tini
RUN apk add --update tini
# Create dir for app
RUN mkdir -p /usr/src/app
# Change work dir
WORKDIR /usr/src/app
# Copy package.json
COPY package.json package.json
# Istall npm & cache clean
RUN npm install
# Copy everything from current dir to Image dir 
COPY . .
# Start container with command tini --node ./src/index.js
CMD ["tini","--","node","./src/index.js"]

