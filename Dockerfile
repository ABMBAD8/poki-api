FROM harbor.bison.prod.caas.absa.co.za/absaaccess/node:12 as development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM harbor.bison.prod.caas.absa.co.za/absaaccess/node:12 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app


COPY . .

COPY --from=development /usr/src/app/dist ./dist
EXPOSE 80 443
CMD ["node", "dist/main"]