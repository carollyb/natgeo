FROM node:alpine
WORKDIR /issues
COPY package*.json .
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npx prisma generate
CMD ["npm", "start"]
EXPOSE 3002