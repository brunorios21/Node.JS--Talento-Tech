// Que hace?   setTimeout es una función que permite ejecutar un bloque de código después de un tiempo determinado. En este caso, el código imprime "inicio", luego espera 1 segundo (1000 milisegundos) antes de imprimir "Resultado demorado", y finalmente imprime "fin".
//console.log("inicio");
//setTimeout(() => console.log("Resultado demorado"), 1000);
//console.log("fin");

// --- Callback ---


//function prepararPedido(callback) {
//    setTimeout(() => callback("Pedido preparado"), 1000);
//}

//prepararPedido((mensaje) => console.log(mensaje));

import { prepararPedido } from "./tareas.js";

///prepararPedido()
//    .then((mensaje) => console.log(mensaje))
//    .catch((error) => console.error(error));


// --- Async / Await 
//async function ejecutarPedido() {
//    try {
//        const mensaje = await prepararPedido();
//        console.log(mensaje);
//    } catch (error) {
//        console.error(error);
//    }
//}

//    const mensaje = await prepararPedido();
//    console.log(mensaje);

//ejecutarPedido();

// --- Fetch ---
fetch("https://jsonplaceholder.typicode.com/users/1")

//fetch(url)
//    .then((response) => response.json())
//    .then((data) => console.log(data))
//    //.catch((error) => console.error(error));    

// --- Async / Await ---
// que hace?   La función obtenerUsuarios() es una función asíncrona que utiliza la sintaxis async/await para realizar una solicitud HTTP a la URL especificada (url) y obtener datos de usuarios. Dentro de la función, se utiliza un bloque try/catch para manejar posibles errores durante la solicitud. Si la solicitud es exitosa, los datos obtenidos se convierten a formato JSON y se imprimen en la consola. Si ocurre un error, se captura y se imprime en la consola.
//async function obtenerUsuarios() {
//    try {
//        const response = await fetch(url);
//        const data = await response.json();
//        console.log(data);
//    } catch (error) {
//        console.error(error);
//    }
//}

async function obtenerUsuarios() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const usuarios = await response.json();
        console.log(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}