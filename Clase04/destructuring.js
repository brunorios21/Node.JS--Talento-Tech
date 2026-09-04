const producto = {
    nombre: "Mouse",
    precio: 100,
    stock: 5,
};

//console.log(producto.nombre);
//console.log(producto.precio);

//let nombreProducto = producto.nombre;
//let precioProducto = producto.precio;

//console.log(nombreProducto, precioProducto);
//constante independiente que va a tener el mismo valor que el objeto producto.nombre y producto.precio
const { nombre, precio, oferta } = producto;

console.log(nombre, precio, oferta);

//ESTO ES DESTRUTURACIÓN en objetos, es una forma de extraer valores de un objeto y asignarlos a variables de manera más concisa.
//En este caso, estamos extrayendo las propiedades "nombre", "precio" y "oferta" del objeto "producto".
//Si la propiedad no existe, como "oferta" en este caso, la variable se asignará como undefined.
const nombres = ["Juan", "Maria", "Pedro", "Ana"];

const [primerNombre, segundoNombre] = nombres;

//console.log(primerNombre, segundoNombre);

//const nombreCuartoElemento = nombres.pop();
//const nombreCuartoElemento = nombres[3];

const [, , , cuartoNombre] = nombres;

console.log(cuartoNombre);

const persona = { nombre: "Ana" };

const { 
    nombre: nombrePersona 
} = persona;
console.log(nombrePersona); // Ana
console.log(nombre); // Mouse