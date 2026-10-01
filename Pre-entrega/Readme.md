# TechLab - Gestor de Productos CLI

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ESModules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![FakeStore API](https://img.shields.io/badge/API-FakeStore-00A6D6?style=for-the-badge)](#)

Herramienta de interfaz de línea de comandos (CLI) desarrollada para la evaluación técnica de TechLab. Permite la gestión dinámica de productos de una tienda en línea interactuando directamente con la API REST de FakeStore.

## Tabla de Contenidos

- [Contexto: Pre-Entrega de Talento Tech](#contexto-pre-entrega-de-talento-tech)
- [Enunciado del Proyecto](#enunciado-del-proyecto)
- [Características Principales](#características-principales)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Guía de Uso](#guía-de-uso)
- [Autor](#autor)

---

## Contexto: Pre-Entrega de Talento Tech

La Pre-Entrega de Talento Tech es una instancia de evaluación técnica decisiva dentro del programa de formación intensiva en programación. Su objetivo principal es validar la integración práctica de los conocimientos adquiridos en el desarrollo backend, específicamente utilizando Node.js. 

En lugar de simples ejercicios teóricos, esta pre-entrega simula un requerimiento de entorno laboral real (en este caso, para una empresa ficticia llamada TechLab). El desarrollador debe demostrar su capacidad para configurar entornos de trabajo desde cero, procesar datos de entrada dinámicos, consumir APIs externas mediante promesas y manejar estructuras de control asíncronas. Superar este desafío certifica las competencias lógicas y de estructuración de código necesarias para avanzar hacia la certificación final del curso.

---

## Enunciado del Proyecto

A continuación, se detalla el requerimiento original planteado para esta evaluación:

> "Hemos llegado al momento clave. Es hora de demostrar si estás preparado para dar el siguiente paso y unirte a nuestro equipo en TechLab.
> Tu desafío es integrar todo lo aprendido en un único programa. Queremos ver cómo manejas estructuras, APIs y lógica dinámica. El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal. ¿Estás listo para el reto?"

### Requerimiento #1: Configuración Inicial
* Crea un directorio donde alojarás tu proyecto e incluye un archivo index.js como punto de entrada.
* Inicia Node.js y configura npm usando el comando npm init -y.
* Agrega la propiedad "type": "module" en el archivo package.json para habilitar ESModules.
* Configura un script llamado start para ejecutar el programa con el comando npm run start.
* *Sabrina señala:* "Este será el corazón de tu proyecto. Queremos un entorno limpio y profesional, como si estuvieras trabajando en un proyecto real".

### Requerimiento #2: Lógica de Gestión de Productos
Con la base del proyecto lista, ahora necesitamos implementar las funcionalidades principales usando la API FakeStore. El sistema debe ser capaz de interpretar comandos ingresados en la terminal y ejecutar las siguientes acciones:

* **Consultar Todos los Productos:** Si ejecutas `npm run start GET products`, el programa debe realizar una petición asíncrona a la API y devolver la lista completa de productos en la consola.
* **Consultar un Producto Específico:** Si ejecutas `npm run start GET products/<productId>`, el programa debe obtener y mostrar el producto correspondiente al productId indicado.
* **Crear un Producto Nuevo:** Si ejecutas `npm run start POST products <title> <price> <category>`, el programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados y devolver el resultado.
* **Eliminar un Producto:** Si ejecutas `npm run start DELETE products/<productId>`, el programa debe enviar una petición DELETE para eliminar el producto correspondiente y devolver la respuesta en la consola.

### Tips de Desarrollo
* Usa `process.argv` para capturar y procesar los comandos ingresados.
* Implementa `fetch` para interactuar con la API de FakeStore.
* Aprovecha el uso de destructuring y spread para manipular los datos.
* Utiliza métodos de arrays y strings para separar cadenas de texto y conjuntos de información.

> *Matías finaliza:* "Este desafío no solo mide tus habilidades técnicas, sino también tu capacidad para organizarte, resolver problemas y crear soluciones escalables. Si logras superar este reto, estaremos más que seguros de que estás listo para unirte a TechLab".

---

## Características Principales

El sistema procesa argumentos desde la terminal para ejecutar operaciones asíncronas HTTP, incluyendo:

*   Consulta general del catálogo de productos.
*   Búsqueda específica de artículos mediante identificador único (ID).
*   Creación de nuevos registros de productos aplicando manipulación avanzada de arrays.
*   Eliminación de registros existentes.

---

## Requisitos Previos

Para ejecutar este proyecto, es necesario contar con el siguiente entorno:

*   [Node.js](https://nodejs.org/) (Versión 18.0.0 o superior recomendada).
*   Gestor de paquetes `npm`.

---

## Instalación

1. Clonar el repositorio o descargar los archivos del proyecto.
2. Navegar al directorio raíz del proyecto desde la terminal.
3. Inicializar el entorno instalando las configuraciones predeterminadas:

```bash
npm install