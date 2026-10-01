//Capturamos los argumentos utiles usando slice para ignorar las rutas del sistema
const args = process.argv.slice(2);
const method = args[0];
const endpoint = args[1];
const API_URL = "https://fakestoreapi.com"; 

async function gestionarProductos(){
}
try {
    //Consultar todos los productos
    if (method === "GET" && endpoint === "products") {
        const response = await fetch( `${API_URL}/products`);
        const data = await response.json();
        console.log("Todos los productos:", data);
    }

    //Consultar un producto especifico
    //GET trae un producto especifico, para ello debe pasar el ID del producto en la ruta, por ejemplo: node index.js GET products/1
    else if (method === "GET" && endpoint.startsWith("products/")) {
        const id = endpoint.split("/")[1];
        const response = await fetch(`${API_URL}/products/${id}`);
        const data = await response.json();
        console.log(`Producto con ID ${id}:`, data);
    }
    //Crear un producto Nuevo
    else if (method === "POST" && endpoint === "products") {
        const titulo = args[2];
        const precio = Number(args[3]);
        const categoria = args[4];
        
        const response = await fetch(`${API_URL}/products`, {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
                },
            body: JSON.stringify({
                title: titulo,
                price: precio,
                category: 'Generado desde terminal',
                image: 'https://i.pravatar.cc',
                    category: categoria
            })
        });
        const data = await response.json();
        console.log("Producto creado:", data);
    }
    //Eliminar un producto
    else if (method === "DELETE" && endpoint.startsWith("products/")) {
        const id = endpoint.split("/")[1];
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(`Producto con ID ${id} eliminado:`, data);
    }
    else {
        console.log("Comando no reconocido. Por favor, use los comandos correctos.");
    }
    } catch (error) {
    console.error("Error al gestionar productos:", error);

}