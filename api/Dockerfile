FROM node:12-alpine

WORKDIR /api

EXPOSE 3000

COPY . .

RUN yarn global add nodemon
RUN yarn

CMD ["yarn", "start"]