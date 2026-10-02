# Clase 09 - API de Backend con Express

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)

## Analisis del Proyecto

Este proyecto consiste en la creacion de un servidor web basico utilizando Node.js y el framework Express. En el archivo principal, se puede observar la transicion desde el uso del modulo nativo `http` (el cual se encuentra comentado) hacia una implementacion mas moderna y practica con Express, lo que simplifica considerablemente el enrutamiento y la gestion de solicitudes.

El entorno esta configurado para utilizar modulos de ES6 (gracias a la configuracion en el package.json) y el servidor expone dos rutas principales:

* **Ruta raiz (`/`)**: Devuelve un mensaje de texto plano confirmando el funcionamiento de la API.
* **Ruta de productos (`/api/productos`)**: Devuelve un arreglo de objetos en formato JSON que representa un listado de productos de prueba.

El servidor escucha las peticiones a traves del puerto 3001. Ademas, el proyecto tiene configurados scripts para facilitar el desarrollo, utilizando dependencias como `nodemon` para que el servidor se reinicie automaticamente cuando se realicen cambios en el codigo fuente.

## Imagenes

A continuacion se presentan las imagenes generadas correspondientes a la API y el entorno:

### Herramientas
Vista de las herramientas de desarrollo y el entorno de trabajo configurado para el servidor web.

![Herramientas](herramientas.png)

### Productos
Visualizacion de la respuesta de la API al solicitar la ruta de productos, retornando el listado en formato JSON.

![Productos](productos.png)

## Scripts Disponibles

En este proyecto puedes ejecutar los siguientes comandos:

* `npm start`: Inicia la aplicacion utilizando Node.js de forma estandar.
* `npm run dev`: Inicia el entorno de desarrollo utilizando Nodemon para la recarga automatica de los archivos.
