FROM node:18-alpine

WORKDIR /app

EXPOSE 80

COPY package.json package-lock.json ./

RUN npm install --force --silent

COPY . .

CMD ["npm", "run", "start"]