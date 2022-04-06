FROM node:10 as dependencies

WORKDIR /api

COPY package.json ./

ARG NODE_ENV production

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --production; \
    fi

COPY . ./

RUN if [ "$NODE_ENV" = "production" ]; \
    then npm run build; \
    fi

ENV PORT 8080

EXPOSE ${PORT}

CMD ["npm", "start"]