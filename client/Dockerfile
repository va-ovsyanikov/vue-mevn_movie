FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm install

COPY .   .

RUN apt-get update && apt-get -y install mc

ENV PORT_VUE=3002

EXPOSE 3002

CMD npm run serve

