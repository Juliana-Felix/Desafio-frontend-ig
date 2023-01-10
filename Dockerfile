FROM node:14.15.4-alpine3.12

USER node

WORKDIR /home/node/app

COPY package*.json ./ 

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]

EXPOSE 3000