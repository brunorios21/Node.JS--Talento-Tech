/* console.log("Hola node.js Clase 2");


console.log(process.plataform);
console.log(process.version);

console.log("document"); // quiere decir que no esta definido en el navegador, ya que document es un objeto del navegador y no de node.js

console.log("process"); // quiere decir que si esta definido en node.js, ya que process es un objeto de node.js y no del navegador
// que devuelve? devuelve un objeto con informacion del proceso de node.js, como la version de node.js
console.log(process.cwd());// 

const args = process.argv; 

console.log(args); // devuelve un array con los argumentos que se le pasan al script de node.js, el primer elemento es la ruta del ejecutable de node.js, el segundo elemento es la ruta del script que se esta ejecutando, y los siguientes elementos son los argumentos que se le pasan al script
console.log(args[2]); // devuelve el tercer elemento del array, que es el primer argumento que se le pasa al script
 
 console.log("inicio");
 for (let i = 0; i < 1000000000; i++) {}
 console.log("fin"); // esto se ejecuta despues de que se termine el bucle, ya que node.js es sincrono, es decir, que se ejecuta una instruccion despues de la otra, y no se puede ejecutar otra instruccion mientras se esta ejecutando una instruccion
 //Tarea bloqueante: hacer un bucle que cuente hasta 1000000000 y luego imprimir "fin" en la consola, esto bloquea el hilo de ejecucion de node.js, ya que node.js es sincrono, es decir, que se ejecuta una instruccion despues de la otra, y no se puede ejecutar otra instruccion mientras se esta ejecutando una instruccion
 */
console.log("inicio");

setTimeout(function() {
    console.log("proceso terminado 3");
}, 3000); // esto se ejecuta despues de que se termine el bucle, ya que node.js es asincrono, es decir, que se puede ejecutar otra instruccion mientras se esta ejecutando una instruccion
console.log("fin");
// si colocamos 0 en el setTimeout, se ejecuta despues de que se termine el bucle, ya que node.js es asincrono, es decir, que se puede ejecutar otra instruccion mientras se esta ejecutando una 
setTimeout(function() {
    console.log("proceso terminado 2");
}, 200); // esto se ejecuta despues de que se termine el bucle, ya que node.js es asincrono, es decir, que se puede ejecutar otra instruccion mientras se esta ejecutando una instruccion
setTimeout(function() {
    console.log("proceso terminado 1");
}, 0); // esto se ejecuta despues de que se termine el bucle, ya que node.js es asincrono, es decir, que se puede ejecutar otra instruccion mientras se esta ejecutando una instruccion
