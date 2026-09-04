const producto = {
    nombre: "Mouse",
    precio: 100,
    stock: 5,
    disponible: true,
    descripcion: "Mouse inalámbrico",
}
// ES copiar 
const nuevoProducto = {
    ...producto,
    oferta: true,
    precio: 120
};
console.log(nuevoProducto);
console.log(producto);


// const nnuevoProducto = producto;
// nnuevoProducto.oferta = true;
// console.log(nnuevoProducto);
//

const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];

const todosLosNumeros = [...numerosPares, ...numerosImpares];
console.log(todosLosNumeros);

console.log(todosLosNumeros);
const nuevosNumeros = [...todosLosNumeros, 6];
console.log(nuevosNumeros);



numerosPares.push(12);
numerosImpares.push(11);

console.log(numerosPares);
console.log(numerosImpares);
console.log(todosLosNumeros); // no se modifica porque es una copia, no una referencia