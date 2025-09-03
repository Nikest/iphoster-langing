FROM node:24.7.0-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]