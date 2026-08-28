// creamos una función llamada saludar

//function saludar(){
//    const saludo = "Hola mundo!";
//    console.log("hola,  mundo");
//}
// Llamada a la función
// por que llamamos varias veces? porq|ue queremos que se ejecute varias veces, cada vez que la llamamos, se ejecuta el código dentro de la función.
//saludar();
//saludar();
//saludar();


//Una function es un bloque de código que se puede reutilizar, y que se ejecuta cuando se llama a la función.
//Parametros: son valores que se pasan a la funcion para que los utilicemos dentro de ellla.
//function sumr (a,b){

//    const resultado = a + b;
   // console.log(resultado, typeof resultado);    
//    return resultado;
//}
//let resultado = sumar(3, 5);
//console.log(resultado);
//resultado = sumar(10, 20);
//console.log(resultado);

//resultado = sumar ('1', -2);
//console.log(resultado);

//Funcion declarada: se puede llamar antes de declararla, ya que el motor de JS la "eleva" al inicio del archivo.
//function multiplicar(a, b) {
//    const resultado = a * b;
//    return resultado;
//}
//const multiplicar = (a, b) => a * b;
    
//const resultadoMultiplicacion = multiplicar(4,5);
//console.log(resultadoMultiplicacion);
//const saludar = (nombre) => {
// `hola, ${nombre}!`; // template string 

//}
//const saludar = (nombre) => {`hola, ${nombre}!`; // template string 

//}
//console.log(saludar("Juan"));
//console.log(saludar("Maria"));
//console.log(saludar("Pedro"));  


//function calculadora(a, b, operacion) {
//    if (operacion === "sumar") {
//        return a + b;
//    }
//    if (operacion === "restar") {
//        return a - b;
//    }
//    if (operacion === "multiplicar") {
//        return a * b;
//    }
//    if (operacion === "dividir") {
//        return a / b;
//    function calculadora(a, b, operacion) {
//        return operacion(a, b);
//    }
//    return null;

//}   
//}
//calculadora(10, 5, "sumar"); // 15
//calculadora(10, 5, "restar"); // 5
//calculadora(10, 5, "multiplicar"); // 50
//calculadora(10, 5, "dividir"); // 2

//function calculadora(a, b, operacion) {
//    return operacion(a, b);
//}
//caluladora (4, 5,sumar);

//const precios = [10, 20, 30, 40, 50];
//console.log(precios[0]);
//console.log(precios[1]);
//onsole.log(precios[2]);
//console.log(precios[3]);
//console.log(precios[4]);

//function mostrar(item){
//    console.log(item);

//}
//precios.forEach(mostrar);

//const precios = [100, 70, 50,120];

//function calcularPrecioFinal(precio){
//    return precio* 1.21;

// [121, 84.7, 60.5, 145.2]
//const preciosFinales = precios.map(calcularPrecioFinal);
//console.log(preciosFinales, precios);
//                1    2   3  4 
//const precios = [100, 70, 50,120];
//                0    1   2  3


//const numeros = [1, 2, 3, 4, 5];

//function par_o_impar(item){
//    if  (item % 2 === 0) 
//        return "par";
//    }
//    return "impar";
// return num % 2 == 0 ? "par" : "impar";

//const numerosTexto = numeros.map(par_o_impar);
//console.log(numerosTexto);
//Spoilers de mas adelante!
//esta estructura va a ser nuestra base de datos, y vamos a poder hacer operaciones con ella, como por ejemplo, filtrar los productos que tengan stock, o los que tengan un precio mayor a 100. 
//const productos = [
//    {
//        nombre: "producto 1",
//        precio: 100,
//        stock: 10
//    },
//    {
//        nombre: "producto 2",
//        precio: 200,
//        stock: 20
//
//
//    },
//];
//El proyecto final va a ser una API, que va a ser un catalogo de productos, autenticacion de ciertas rutas, productos, logeo, json web token, y vamos a poder hacer operaciones con los productos, como por ejemplo, filtrar los productos que tengan stock, o los que tengan un precio mayor a 100.