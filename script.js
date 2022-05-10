// Simulador de carrito de ecommerce

let productos = prompt("Elige tu producto: \n 1. Placa de video \n 2. Processador \n 3. Memoria ram \n 4. Motherboard  \n Escribe FIN para finalizar la compra")

function carrito() {
    switch (productos) {
        case "1":
            alert('Placa de video se agregó al carrito');
            precioFinal(15000)
            break

        case "2":
            alert('Processador se agregó al carrito');
            precioFinal(2000)
            break

        case "3":
            alert('Refresco de sandía se agregó al carrito');
            precioFinal(4000)
            break

        case "4":
            alert('Refresco de melón se agregó al carrito');
            precioFinal(6000)

        default:
            alert('Aún no tenemos ese hardware');
    }
}

// Precio total.

let precioTotal = 0;
function precioFinal(precio) {
    precioTotal += precio
}

do{
    carrito()
    productos = prompt("Elige tu producto: \n 1. Placa de video \n 2. Processador \n 3. Memoria ram \n 4. Motherboard  \n Escribe FIN para finalizar la compra")
}while (productos != 'FIN') {
    alert('El precio total de tu compra es: ' + precioTotal)
}
    

