//const nombres = ["Mouse", "Keyboard", "Monitor", "CPU", "Printer"];
// Iterar sobre el array de nombres y mostrar cada uno en la consola
//nombres.forEach((nombre) => {
//    console.log(`${nombre}`);
//});
//const nombre = "mouse";
//const precio = 100;
//const stock = 5;

//const producto = ['Mouse', 100, 5];
//
//const producto = {
//    nombre: "Mouse",
//    precio: 100,
//    stock: 5,
//    disponible: false,
//    categoria: "Perifericos",

//};
//producto.precio = 110;
//console.log(producto.precio);
 //const propiedad = "stock";
 //console.log(producto[propiedad]);
//producto.categorias = ["Perifericos", "Hardware"];
// delete producto.nombre;
//console.log(producto);
// QUE HACE?    
//const producto = {
//    nombre: "Mouse",
//    precio: 100,
//    stock: 5,
//    disponible: false,
//    categoria: "Perifericos",
//    resumen: function() {
//        return `El producto ${this.nombre} tiene un precio de ${this.precio} y un stock de ${this.stock}`;
//    }
//};
//console.log(producto.resumen());

const productos = [
    {
        nombre: "Mouse",
        precio: 100,
        stock: 5,
        disponible: false,
        categoria: "Perifericos",
    },
    {
        nombre: "keyboard",
        precio: 200,
        stock: 10,
        disponible: true,
        categoria: "Perifericos"
    },
    {
        nombre: "Printer",
        precio: 300,
        stock: 2,
        disponible: true,
        categoria: "Perifericos"
    }
];
const precios = productos.map((producto) => producto.precio);
console.log(precios);

const productosDisponibles = productos.filter((producto) => producto.disponible);
console.log(productosDisponibles);

const productoBarato = productos.find((producto) => producto.precio < 150);
console.log(productoBarato);

const nombresDisponibles = productos.map((producto) => producto.nombre);
console.log(nombresDisponibles);