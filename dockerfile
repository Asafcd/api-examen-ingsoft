FROM node:16

RUN mkdir -p /usr/
WORKDIR /usr/


COPY package*.json /usr/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


COPY . .
#expose es el puerto y debe coindicid con el EXTERNO de docker
EXPOSE 80
CMD [ "node", "./scr/index.js" ]
