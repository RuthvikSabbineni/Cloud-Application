FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000 DB_URL="mongodb+srv://dsocialComptroller:ztferhTnTtYSnXyp@deakinsocial.cctte.mongodb.net/social"

EXPOSE 3000

CMD [ "npm", "start" ]