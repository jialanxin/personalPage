FROM alpine
WORKDIR /app
COPY ./caddy .
COPY ./conf ./conf
COPY ./dist ./dist
RUN mv caddy /usr/bin  && mkdir key
CMD ["caddy","run","--config","./conf/Caddyfile","--adapter","caddyfile"]
