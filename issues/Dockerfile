FROM node:alpine
WORKDIR /issues
COPY package*.json .
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npx prisma generate
CMD ["npm", "run", "dev"]
EXPOSE 3002