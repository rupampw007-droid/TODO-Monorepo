FROM oven/bun:1

WORKDIR /app
COPY ./packages  ./packages
COPY ./package.json  ./package.json
COPY ./bun.lock   ./bun.lock
COPY ./turbo.json   ./turbo.json
COPY ./apps/ws/package.json ./apps/ws/package.json 

RUN npm install

COPY ./apps/ws ./apps/ws

 RUN bun install 
 
 RUN bun run db:migrate

 EXPOSE 8000

 CMD [ "bun", "run", "start:websocket" ]


