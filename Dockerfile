FROM node:7
WORKDIR /github
COPY package.json /app
RUN npm install
COPY . /github
CMD node app.js
EXPOSE 3000
