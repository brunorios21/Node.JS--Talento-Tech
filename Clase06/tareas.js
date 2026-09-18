function prepararPedido(){
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (Math.random() < 0.5) {
             resolve({mensaje: "Pedido preparado"});
             } else {
                reject({error: "Error al preparar el pedido"});
             }
         }, 1000);
     });
}