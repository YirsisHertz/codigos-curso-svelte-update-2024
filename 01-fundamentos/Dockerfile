FROM node:18.19.1-alpine AS build

WORKDIR /app

COPY . .

RUN npm i -g pnpm

RUN pnpm i

# result -> dist
RUN pnpm run build 

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
