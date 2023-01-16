FROM node:19.2-alpine3.16
# /app es el nobre da la carpeta interna de linux

#cd app es como decir que haga eso
WORKDIR /app

#Destino /app porque puse el workdir
COPY package.json ./

#Instalar las dependencias
RUN yarn 

#con . . copio todo lo del path
COPY . .

#Realizar testing
RUN yarn test

#Eliminar archivos y directorios no necesarios en PROD
RUN rm -rf tests && rm -rf node_modules

#Unicamente las depedneicas de PROD
RUN yarn --prod

#Comando run de la imagen
CMD ["node","app.js"]