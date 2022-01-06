FROM node:12.16.1-alpine As builder

### STAGE 1: Build ###
WORKDIR /app
COPY package.json ./

RUN npm install --force

COPY . .

ARG PROFILE
ENV PROFILE $PROFILE

RUN echo "Environment: ${PROFILE}"
RUN npm run build --${PROFILE} --outputHashing=all

### STAGE 2: Run ###
FROM nginx:1.15.8-alpine

COPY --from=builder /app/www /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
