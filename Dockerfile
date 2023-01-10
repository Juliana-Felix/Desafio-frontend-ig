FROM node:18-alpine

USER node

WORKDIR /home/node/app

COPY package*.json ./ 

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]

EXPOSE 3000