FROM node:lts-alpine as build-stage
RUN mkdir -p /app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

ARG APP_URL
ENV VITE_APP_URL $APP_URL

ARG GOOGLE_ANALYTICS_TRACKING_ID
ENV VITE_GOOGLE_ANALYTICS_TRACKING_ID $GOOGLE_ANALYTICS_TRACKING_ID

RUN npm run build

FROM nginx:alpine as production-stage
EXPOSE 8081
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

