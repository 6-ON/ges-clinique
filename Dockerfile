FROM node:14-alpine

WORKDIR /app

COPY package*.json .

RUN npm i -yes

COPY . /app

CMD ["npm", "start"]
