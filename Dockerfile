FROM node:14.16.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY backend/ .
# COPY mutations/ .
# COPY schemas .
# COPY lib/ .
# COPY *.ts .
# COPY *.json .
# COPY schema.* .
RUN yarn  install
RUN chown -R app /opt/app
USER app
EXPOSE 3000
#CMD [ "yarn", "run", "pm2" ]
CMD [ "ls", "/opt/app/schemas"]
CMD [ "yarn", "dev"]