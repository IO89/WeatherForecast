# Using node version 9 with alpine
FROM node:9-alpine
# Enviroment viriables
ENV APP_ID  91931bbedeaee3ede7a5eb46cbd6fe21
ENV MAP_ENDPOINT  http://api.openweathermap.org/data/2.5
ENV TARGET_CITY  Helsinki,fi
ENV PORT 9000
#Create work dir
RUN mkdir -p /usr/src/app
# Change work dir
WORKDIR  /usr/src/app
# Copy package.json
COPY package.json package.json
# Istall npm and isntall nodemon
RUN npm install
# Copy everything from current dir to Image dir 
COPY . .
# Start container with command tini --node ./src/index.js
CMD ["node","./src/index.js"]

