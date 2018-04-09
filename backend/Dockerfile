# Using node version 9 with alpine
FROM node:9-alpine
# Expose port
EXPOSE 9000
#Install tini
RUN apk add --update tini
# Install nodemon
RUN npm install nodemon --global
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
# Npm install
RUN npm i
# Copy everything from current dir to Image dir 
COPY . .
# Start container with command tini --node ./src/index.js
CMD ["tini","--","nodemon","./src/index.js"]

