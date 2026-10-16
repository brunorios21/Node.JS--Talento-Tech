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
app.use(express.json()); // Middleware para parsear JSON en el body de las peticiones   
const catgorias = [
    { id: 1, nombre: "tecnologia" },
    { id: 2, nombre: "ropa" },
    { id: 3, nombre: "hogar" },
]
const productos = [
    { id: 1, nombre: 'Teclado', precio: 10, categoria: catgorias[0] },
    { id: 2, nombre: 'Mouse', precio: 20, categoria: catgorias[0] },
    { id: 3, nombre: 'Monitor', precio: 30, categoria: catgorias[0] },
];
app.get('/api/productos', (req, res) => {
    const categoriaID = parseInt(req.query.categoria);
    if (categoriaID) {
        return res.json(400).json({ error: "Categoria no encontrada" });
    }
});


app.get('/', (req, res) => {
    res.send('Api del curso de funcionando');
});

app.get('/api/productos', (req, res) => {
    res.send(productos);
});

app.get("/api/categorias", (req, res) => {
});

app.get("/api/productos/:id", (req, res) => {
    const productID = parseInt(req.params.id);
    //console.log(fetching product with id: ${productID});
    const producto = productos.find((p) => p.id === productID);
    if (!producto) {
        res.status(404).send("Producto no encontrado");
    } else {
        res.json(producto);
    }
});

app.get("/api/productos", (req, res) => {
    const categoriaID = parseInt(req.query.categoriaID);
    if(!categoriaID) {
        res.json(productos);
        return;
    }
});

const newProduct = {
    id: productos.length + 1,
    nombre: "Nuevo Producto",
    precio: 50,
    categoria: catgorias[0],
};
productos.push(newProduct);
res.status(201).json(newProduct);


const PORT = 3001;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});