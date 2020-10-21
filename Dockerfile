FROM node:14-alpine
WORKDIR /app
ADD package*.json ./
ADD . .
RUN npm i
CMD npm run start