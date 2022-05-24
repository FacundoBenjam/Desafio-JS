// Simulador de carrito de compras

let listaComponentesPrecios = "";
let listaProductos;
listaProductos = prompt("¡Hola! escribí DO para ver nuestros productos");

const componentes = [
  {
    componente: "Placa de video GEFORCE 215",
    marca: "NVIDIA",
    precioProducto: 360,
  },
  {
    componente: "Processador AMD 6 nucleos",
    marca: "AMD",
    precioProducto: 475,
  },
  {
    componente: "Processador AMD 4 nucleos",
    marca: "AMD",
    precioProducto: 350,
  },
  {
    componente: "Motherboard Asus PRIME",
    marca: "Asus",
    precioProducto: 470,
  },
  {
    componente: "Gabinete SENTEY",
    marca: "SENTEY",
    precioProducto: 470,
  },
  {
    componente: "Memoria RAM 4gb",
    marca: "KINGSTON",
    precioProducto: 450,
  },
  {
    componente: "Placa de video ASUS 250",
    marca: "ASUS",
    precioProducto: 380,
  },
  {
    componente: "Memoria RAM 8gb",
    marca: "KINGSTON",
    precioProducto: 500,
  },
  {
    componente: "Gabinete Pegaxus",
    sabor: "Pegaxus",
    precioProducto: 350,
  },
];

//forEach()

componentes.forEach((pieza) => {
  listaComponentesPrecios += pieza.componente + "\n";
  listaComponentesPrecios += "$" + pieza.precioProducto + "\n";
});

while (listaProductos !== "DO") {
  console.log("Incorrecto, ingresar DO");
  listaProductos = prompt("¡Hola! escribí DO para ver nuestros productos");
}
alert("Lista de nuestros productos :" + "\n" + listaComponentesPrecios);

// filter()

const nombres = [
  "Placa de video GEFORCE 215",
  "Gabinete SENTEY",
  "Memoria RAM 4gb",
  "Placa de video ASUS 250",
  "Memoria RAM 8gb",
  "Gabinete Pegaxus",
  "Processador AMD 6 nucleos",
];

function buscarComponentes(nombres, buscar) {
  let bebidasDeseadas = nombres.filter(function (componente) {
    return componente.includes(buscar);
  });
  return bebidasDeseadas;
}

if (buscarComponentes) {
  alert("Productos recomendados: " + buscarComponentes(nombres, "l"));
}

// find()

let encontrar = prompt(
  "Según la lista que viste, seleccioná el producto que desees y mira si está en stock o no"
);
const arrayComponentes = [
  "Placa de video GEFORCE 215",
  "Processador AMD 6 nucleos",
  "Processador AMD 4 nucleos",
  "Motherboard Asus PRIME",
  "Memoria RAM 8gb",
];
const found = arrayComponentes.find((el) => {
  el;
});

if (encontrar == "Placa de video GEFORCE 215") {
  alert("Sí, tu producto está en stock");
} else if (encontrar == "Processador AMD 6 nucleos") {
  alert("Sí, tu producto está en stock");
} else if (encontrar == "Processador AMD 4 nucleos") {
  alert("Sí, tu producto está en stock");
} else if (encontrar == "Motherboard Asus PRIME") {
  alert("Sí, tu producto está en stock");
} else if (encontrar == "Memoria RAM 8gb") {
  alert("Sí, tu producto está en stock");
} else {
  alert("Lo sentimos, no tenemos stock de este producto");
}

//function

let productos = prompt(
  "Comprar productos en stock: \n 1. Placa de video GEFORCE 215 \n 2. Processador AMD 6 nucleos \n 3. Processador AMD 4 nucleos \n 4. Motherboard Asus PRIME  \n 5. Memoria RAM 8gb \n Escribe ESC para finalizar la compra"
);

function carrito() {
  switch (productos) {
    case "1":
      alert("Placa de video GEFORCE 215 se agregó al carrito");
      precioFinal(360);
      break;

    case "2":
      alert("Processador AMD 6 nucleos se agregó al carrito");
      precioFinal(475);
      break;

    case "3":
      alert("Processador AMD 4 nucleos se agregó al carrito");
      precioFinal(350);
      break;

    case "4":
      alert("Motherboard Asus PRIME se agregó al carrito");
      precioFinal(470);
      break;

    case "5":
      alert("Memoria RAM 8gb se agregó al carrito");
      precioFinal(500);
      break;

    default:
      alert("Aún no tenemos ese refresco en nuestra tienda :(");
  }
}

let precioTotal = 0;

function precioFinal(precio) {
  precioTotal += precio;
}

while (productos != "ESC") {
  carrito();
  productos = prompt(
    "Comprar productos en stock: \n 1. Placa de video GEFORCE 215 \n 2. Processador AMD 6 nucleos \n 3. Processador AMD 4 nucleos \n 4. Motherboard Asus PRIME \n 5. Memoria RAM 8gb \n Escribe ESC para finalizar la compra"
  );
}
alert("Compra finalizada. El precio total de su compra es : $" + precioTotal);
