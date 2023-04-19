#Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# add git to your image
RUN apk --no-cache add git
WORKDIR /app
RUN apk update

# clone the project repo and install dependencies

RUN git clone https://github.com/sparshkr24/Cybernet2
WORKDIR /app/Cybernet2/client
RUN npm i 
EXPOSE 3000
CMD ["npm","start"]


# Working directory be app
# WORKDIR /usr/src/app

# COPY package*.json ./

###  Installing dependencies

# RUN npm install --silent

# copy local files to app folder
# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]