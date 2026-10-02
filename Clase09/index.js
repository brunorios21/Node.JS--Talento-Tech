//const http = require('http');
// creamos el server
//const server = http.createServer((request, response)=> {
//    response.end("Hola mundo")
//});
// escuchamos en el puerto 3000
//server.listen(3000, ()=> {
//    console.log("Servidor escuchando en el puerto 3000");
//});

import express from 'express';
//Middleware (que hace?) /decime vos que hace!
const app = express();
app.use((req, res, next) => {
    res.send(`En mantenimiento, vuelva mas tarde`);   
    // console.log(`${req.method} - ${req.url}`) || next();
});
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 },
];

app.get('/', (req, res) => {
    res.send('Api del curso de Backend');
});

app.get('/api/productos', (req, res) => {
    res.send(productos);
});


const PORT = 3001;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});