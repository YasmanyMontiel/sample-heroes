## Stage 1 "build-stage", based on Node.js, to build and compile Angular

FROM node:lts-bullseye as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build -- --output-path=./dist/out

## Stage 2, based on Nginx, to have only the compiled app with Nginx
FROM nginx:alpine

ADD ./config/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]