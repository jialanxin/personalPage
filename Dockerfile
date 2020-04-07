FROM alpine
WORKDIR /app
COPY ./caddy /usr/bin
COPY ./conf ./conf
COPY ./dist ./dist
RUN mkdir key
CMD ["caddy","run","--config","./conf/Caddyfile","--adapter","caddyfile"]
