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

// Agregar al carrito y guardar en Storage

function agregarAlCarrito(nuevo) {

  if (carrito.includes(nuevo)) {
      Swal.fire({
          title: 'Ya esta en tu carrito!',
          text: 'Continuar con tu compra',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
      }).showToast();
  } else {
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: (nuevo.componente + " agregado al carro!"),
          showConfirmButton: false,
          timer: 1500
      })
      carrito.push(nuevo);
  }

  document.getElementById("carrito-comprar").innerHTML += `

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


//Optimizando el proyecto

const productosRecomendados = ["Memoria RAM 4gb", "Processador AMD 6 nucleos", "Gabinete SENTEY"]

const [a,b] = productosRecomendados
console.log("Los más deseables: "+a+" y "+b);



let boton = document.getElementById("boton2")
boton.onclick = () => {
    productosRecomendados.length !== 0 && Swal.fire({
        title: 'Productos recomendados!',
        text: 'Combo Memoria RAM 4GB y Processador AMD 6 nucleos, Compralos YA!',
        imageUrl: 'Assets/img/x.jpeg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'componente',
    })
    console.log(...productosRecomendados)
}