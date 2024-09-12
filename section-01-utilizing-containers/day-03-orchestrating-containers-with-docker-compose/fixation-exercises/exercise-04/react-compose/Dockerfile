FROM node:16.14-alpine
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD [ "start" ]