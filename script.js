// Simulador de carrito de compras

const componentes = [
  {
    id: 1,
    componente: "Placa de video GEFORCE 215",
    marca: "NVIDIA",
    precio: 1200,
    imagen: "assets/img/geforce250.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    componente: "Processador AMD 6 nucleos",
    marca: "AMD",
    precio: 1700,
    imagen: "assets/img/procesador6nucleos.jpg",
    cantidad: 1
  },
  {
    id: 3,
    componente: "Processador AMD 4 nucleos",
    marca: "AMD",
    precio: 2000,
    imagen: "assets/img/amd4.jpg",
    cantidad: 1
  },
  {
    id: 4,
    componente: "Motherboard Asus PRIME",
    marca: "Asus",
    precio: 700,
    imagen: "assets/img/motherboardasus.png",
    cantidad: 1
  },
  {
    id: 5,
    componente: "Gabinete SENTEY",
    marca: "SENTEY",
    precio: 5000,
    imagen: "assets/img/gabse.jpg",
    cantidad: 1
  },
  {
    id: 6,
    componente: "Memoria RAM 4gb",
    marca: "KINGSTON",
    precio: 3800,
    imagen: "assets/img/memr.jpg",
    cantidad: 1
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

// Agregar al carrito y guardar en sessionStorage 
function agregarAlCarrito(productoNuevo) {
    let productoEncontrado = carrito.find(p => p.id == productoNuevo.id)
    let index = carrito.indexOf(productoEncontrado)
    if (index !== -1) {
        carrito[index].cantidad += 1
        actualizarCarrito()
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        document.querySelector("#precio-texto").innerText = (`
        Precio total: $ ${obtenerPrecioTotal()}`);
        Swal.fire({
            title: 'Ya está en tu carrito!',
            text: `se agregó una unidad más de ${productoNuevo.componente} en tu carrito`,
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
        carrito.forEach(producto => {
            document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                eliminarDelCarrito(producto.id);
            });
        });
    } else {
        carrito.push(productoNuevo);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Agregaste ${productoNuevo.componente} al carrito!`,
            showConfirmButton: false,
            timer: 1500
          })
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito()
        document.querySelector("#precio-texto").innerText = (`
        Precio total: $${obtenerPrecioTotal()}`);

        carrito.forEach(producto => {
            document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                eliminarDelCarrito(producto.id);
            });
        });
    }
}

// Función que renderiza en la tabla los productos agregados al carrito
function actualizarCarrito() {
    document.getElementById("tablabody").innerHTML = ''
    for (const producto of carrito) {
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${producto.cantidad}</td>
            <td>${producto.componente}</td>
            <td>$${producto.precio}</td>
            <td>$${producto.precio * producto.cantidad}</td>
            <td><button class="boton-eliminar-producto btn btn-outline-danger" type="button" id="btnelim${producto.id}"><i class="fa-solid fa-trash"></i>X</button></td>
        </tr>`;
    }
}

// Eliminar los productos del carrito
function eliminarDelCarrito(id) {
    Swal.fire({
            title: "Estás seguro?",
            text: "Este producto se va a eliminar del carrito",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        })
        .then((result) => {
            if (result.isConfirmed) {
                let newCarrito = carrito.filter(producto => producto.id !== id)
                carrito = newCarrito
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
                actualizarCarrito();
                carrito.forEach(producto => {
                    document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                        eliminarDelCarrito(producto.id);
                    });
                });
                Swal.fire(
                    'Listo!',
                    'Este producto fue eliminado',
                    'success'
                )
                document.querySelector("#precio-texto").innerText = (`Precio total: $ ${obtenerPrecioTotal()}`);
            } else {
                Swal.fire("El producto no se eliminó");
            }
        });
    actualizarCarrito();
    document.querySelector("#precio-texto").innerText = (`
    Precio total: $ ${obtenerPrecioTotal()}`);
    carrito.forEach(producto => {
        document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
            eliminarDelCarrito(producto.id);
        });
    });
}

// Calcular el total con una función
function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precio * producto.cantidad;
    }
    return precioTotal;
}

// Confirmar compra utilizando el método de evento, para cancelarlo
const confirmarCompra = () => {
    let botonComprar = document.getElementById('finalizar-compra')
    botonComprar.addEventListener('click', (event) => {
        event.preventDefault();
        if (carrito.length === 0) {
            Swal.fire({
                title: 'No hay nada que comprar!',
                text: 'Agregá productos a tu carrito',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
        } else {
            setTimeout(() => Swal.fire(
                'Listo!',
                'Compra realizada con éxito',
                'success'
            ),1000);
            carrito=[];
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarCarrito();
            document.querySelector("#precio-texto").innerText=(`
            Precio total: $ ${obtenerPrecioTotal()}`);
        }
    })
}

confirmarCompra()


//Optimizando el proyecto

const Recomendados = ["Memoria RAM 4gb", "Processador AMD 6 nucleos", "Gabinete SENTEY"]

const [a,b] = Recomendados
console.log("Los más deseables: "+a+" y "+b);



let boton = document.getElementById("boton2")
boton.onclick = () => {
    Recomendados.length !== 0 && Swal.fire({
        title: 'Productos recomendados!',
        text: 'Combo Memoria RAM 4GB y Processador AMD 6 nucleos, Compralos YA!',
        imageUrl: 'Assets/img/x.jpeg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'componente',
    })
    console.log(...Recomendados)
}
