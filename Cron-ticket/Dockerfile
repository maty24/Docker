# Dependencias de desarrollo
FROM node:19.2-alpine3.16 as deps 
# /app es el nobre da la carpeta interna de linux

#cd app es como decir que haga eso
WORKDIR /app

#Destino /app porque puse el workdir
COPY package.json ./

#Instalar las dependencias
RUN yarn 



# Build y Tests
#una nueva etapa 
FROM node:19.2-alpine3.16 as builder

#cd app es como decir que haga eso
WORKDIR /app

#copiamos la fuente
COPY --from=deps /app/node_modules ./node_modules

#con . . copio todo lo del path
COPY . .

RUN yarn test





# Dependencias de Producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN yarn --prod




# Ejecutar la APP
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
#copio el directorio tasks
COPY tasks/ ./tasks
#Comando run de la imagen
CMD ["node","app.js"]