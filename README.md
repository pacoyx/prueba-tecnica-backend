# Prueba tecnica Backend NodeJS Jest Redis Docker

## Acerca de
###### Tokenizacion de Tarjetas: Proyecto con Nodejs donde usamos Jest para testear algunas funciones, nos conectamos a Redis ( base de datos no relacional para guardar datos de tarjetas con su token para poder ser recuperadas posteriormente), usamos docker para  'dockerizar' la aplicacion y poder levantar el contenedor.



## Pasos para probar el proyecto de forma local

#### 1.- Clonar el proyecto desde el repositorio de github
```
https://github.com/pacoyx/prueba-tecnica-backend.git
```

#### 2.- Instalar las dependencias
```
npm install
```
#### 3.- configurar las variables de entorno del file .env (agregar el archivo al proyecto o usar el template .env.template)
```
NODE_PORT=3000
JWTKEY='my_secret_key'
JWT_EXPIRES_IN='60s'
```

#### 4.- ejecutar el proyecto de forma local en dev
```
npm run dev
```

#### 5.- ejecutar el comando docker para levantar el contenedor de redis desde nuestro archivo 'docker-compose.yml'
```
docker compose up
```

## Nota de desarrollo
###### se quiso probar el proyecto creando una imagen apartir del dockerfile para crear un contenedor con el proyecto actual y otro contenedor con la bd redis pero no se pudo lograr la conexion en el ambiente de docker, por eso se esta levantando el proyecto de forma local y el redis con docker. En el archivo de docker compose se comento el servicio que era para crear el contenedor del app.

