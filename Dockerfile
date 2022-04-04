FROM node:10 as dependencies

WORKDIR /api

COPY package.json ./

# install node modules
RUN npm install

COPY . ./

ENV PORT 8080

EXPOSE ${PORT}

CMD ["npm", "start"]