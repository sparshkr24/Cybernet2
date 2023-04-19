#Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# add git to your image
RUN apk --no-cache add git
WORKDIR /app
RUN apk update

# clone the project repo and install dependencies

RUN git clone https://github.com/sparshkr24/Cybernet2
WORKDIR /app/Cybernet2/server
RUN npm i 
EXPOSE 5000
CMD ["npm","run","server"]



# #  Dockerfile for Node Express Backend

# FROM node:10.16-alpine

# # Create App Directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # Install Dependencies
# COPY package*.json ./

# RUN npm install --silent

# # Copy app source code
# COPY . .

# # Exports
# EXPOSE 5000

# CMD ["npm","start"]