// Simulador de carrito de compras

const componentes = [
  {
    id: 1,
    componente: "Placa de video GEFORCE 215",
    marca: "NVIDIA",
    precio: 1200,
    imagen: "assets/img/geforce250.jpg",
  },
  {
    id: 2,
    componente: "Processador AMD 6 nucleos",
    marca: "AMD",
    precio: 1700,
    imagen: "assets/img/procesador6nucleos.jpg"
  },
  {
    id: 3,
    componente: "Processador AMD 4 nucleos",
    marca: "AMD",
    precio: 2000,
    imagen: "assets/img/amd4.jpg"
  },
  {
    id: 4,
    componente: "Motherboard Asus PRIME",
    marca: "Asus",
    precio: 700,
    imagen: "assets/img/motherboardasus.png"
  },
  {
    id: 5,
    componente: "Gabinete SENTEY",
    marca: "SENTEY",
    precio: 5000,
    imagen: "assets/img/gabse.jpg"
  },
  {
    id: 6,
    componente: "Memoria RAM 4gb",
    marca: "KINGSTON",
    precio: 3800,
    imagen: "assets/img/memr.jpg"
  },
];
// función para mostrar los productos en el HTML

let carrito = [];
let tarjeta = document.getElementById("tarjeta");

productosCarrito();

function productosCarrito() {
    for (const producto of componentes) {
        tarjeta.innerHTML += `<div class="card" style="width: 250px;">
        <h3> ID: ${producto.id} </h3>
        <img src="${producto.imagen}" width="200" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${producto.componente}</h4>
        <p><strong> $ ${producto.precio}</strong></p>
        <button class="btn btn-primary" id="btn${producto.id}">Comprar</button>
        </div>`;
    }

    componentes.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        });
    });
}


function agregarAlCarrito(nuevo){
  carrito.push(nuevo);
  console.log(carrito);
  alert("Se agrego el producto: "+nuevo.componente+" agregado al carro!")
  document.getElementById("carrito-comprar").innerHTML+=`
  <div class="card">
      <div class="card-body">
      ${nuevo.id}
      ${nuevo.componente}
      ${nuevo.precio}
      </div>
  </div>
  `;

  sessionStorage.setItem("Productos", JSON.stringify(carrito));
}


