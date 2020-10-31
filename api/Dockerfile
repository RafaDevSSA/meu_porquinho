FROM node:12
RUN mkdir /var/www
RUN mkdir /var/www/api
WORKDIR /var/www/api
RUN npm install -g @nestjs/cli
CMD ['npm install', 'npm run dev']