FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

COPY . .

ENV NAME Projekt

EXPOSE 8080

CMD [ "npm", "start" ]