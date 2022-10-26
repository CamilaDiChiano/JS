
/*
const anillosContainer = document.getElementById("anillos");
const collaresContainer = document.getElementById("collares");
const piedrasContainer = document.getElementById("piedras");
const tbody = document.querySelector(".tbody");
const comprar = document.getElementById("comprar");

let carrito = [];

fetch("../productos.json")
  .then((res) => res.json())
  .then((data) => renderCards(data));



function renderCards(data) {
  data.forEach((item) => {
    console.log(item);
    const card = `<div class="col d-flex justify-content-center mb-4">
                            <div class="card shadow mb-1 bg-light rounded" style="width: 18rem;">
                            <img src=${item.img} class="card-img-top h-50" alt=${item.nombre}>
                            <div class="card-body text-dark">
                                <h5 class="card-title pt-2 text-center ">${item.nombre}</h5>
                                <h5 class="text-primary">Precio: $ <span class="precio">${item.precio}</span></h5>
                                <div class="d-grid gap-2 ">
                                <button class="btn btn-primary  botonAdd">Añadir al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    if (item.tipo === "anillo") {
      anillosContainer.innerHTML += card;
    } else if (item.tipo === "piedras"){
      piedrasContainer.innerHTML += card;
    }

    return card;
  });
 

  const botonAdd = document.querySelectorAll(".botonAdd");
  botonAdd.forEach((btn) => {
    btn.addEventListener("click", addToCarritoItem);
  });
}




function addToCarritoItem(e) {
  const button = e.target;
  const item = button.closest(".card");
  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrice = item.querySelector(".precio").textContent;
  const itemImg = item.querySelector(".card-img-top").src;

  const newItem = {
    title: itemTitle,
    price: itemPrice,
    image: itemImg,
    cantidad: 1,
  };

  addItemCarrito(newItem);
}

function addItemCarrito(newItem) {
  Toastify({
    text: "Producto aÃ±adido al carrito",
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();

  const inputElemnto = tbody.getElementsByClassName("input__elemento");
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title === newItem.title) {
      carrito[i].cantidad++;
      const inputValue = inputElemnto[i];
      inputValue.value++;
      CarritoTotal();
      addLocalStorage();
      return null;
    }
  }

  carrito.push(newItem);

  renderCarrito();
}



// tabla carrito


function renderCarrito() {
  tbody.innerHTML = "";
  carrito.map((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("itemCarrito");
    const Content = `<th scope="row" id=${item.id}>1</th>
                    <td class="table__productos">
                            <img class="table__img" src=${item.image}  alt=${item.image}>
                            <h6 class="title">${item.title}</h6>
                        </td>
                        <td class="table__price"><p>${item.price}</p></td>
                        <td class="table__cantidad">
                            <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                            <button class="delete btn btn-danger" id=${item.id}>x</button>
                        </td>
    `;
    tr.innerHTML = Content;
    tbody.append(tr);

    tr.querySelector(".delete").addEventListener("click", removeItemCarrito);
    tr.querySelector(".input__elemento").addEventListener(
      "change",
      sumaCantidad
    );
  });
  CarritoTotal();
}

function CarritoTotal() {
  let total = 0;
  const itemCartTotal = document.querySelector(".total");
  carrito.forEach((item) => {
    const precio = Number(item.price);
    total = total + precio * item.cantidad;
  });

  itemCartTotal.innerHTML = `${total}`;
  addLocalStorage();
}

function removeItemCarrito(e) {
  e.preventDefault();
  const tr = e.target.parentNode.parentNode;
  const title = document.querySelector(".title").textContent;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === title.trim()) {
      carrito.splice(i, 1);
    }
  }
  Toastify({
    text: "Producto eliminado",
    duration: 3000,
    close: false,
    gravity: "top",
    position: "left",
  }).showToast();
  tr.remove();
  CarritoTotal();
}

function sumaCantidad(e) {
  const sumaInput = e.target;
  tr = e.target.parentNode.parentNode;
  const title = document.querySelector(".title").textContent;
  carrito.forEach((item) => {
    if (item.title.trim() === title) {
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = parseInt(sumaInput.value);
    }
    CarritoTotal();
    addLocalStorage();
  });
}

function addLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

const inicio = (window.onload = function () {
  const storage = JSON.parse(localStorage.getItem("carrito"));
  if (storage) {
    carrito = storage;
    renderCarrito();
  }
});

comprar.addEventListener("click", (e) => {
  carrito = [];
  addLocalStorage();
  renderCarrito();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Compra realizada con Ã©xito!",
    showConfirmButton: false,
    timer: 1500,
  });
});





*/


















// localStorage.setItem("productos", JSON.stringify(productosTotales));



//  let productosStorage = JSON.parse(localStorage.getItem("carrito"));

//  if (productosStorage) {
//     carrito = productosStorage;
// }


// ---------------------------------------------------------------------------

//  const contenedorProductos = document.getElementById('contenedorProductos');
//  const contenedorDelCarrito = document.getElementById('carritoContenedor')
 const anillosContainer = document.getElementById("anillos");
 const piedrasContainer = document.getElementById("piedras");




 let carrito = [];


 fetch("../productos.json")
 .then((res) => res.json())
 .then((data) => cards(data));

// function cargarJSON() {
//   fetch("../productos.json")
//   .then((res) => res.json())
//   .then((data) => {
//     database.push(data);
//     console.log(data);
//   });
// }
// cargarJSON();

function cards(data) {
  data.forEach((item) => {
    console.log(item);
    const card = `<div class="col d-flex justify-content-center mb-4">
                            <div class="card shadow mb-1 bg-light rounded" style="width: 18rem;">
                            <img src=${item.img} class="card-img-top h-50" alt=${item.nombre}>
                            <div class="card-body text-dark">
                                <h5 class="card-title pt-2 text-center ">${item.nombre}</h5>
                                <h5 class="text-primary">Precio: $ <span class="precio">${item.precio}</span></h5>
                                <div class="d-grid gap-2 ">
                                <button class="btn btn-primary  botonAdd">Añadir al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    if (item.tipo === "anillo") {
      anillosContainer.innerHTML += card;
    } else if (item.tipo === "piedras"){
      piedrasContainer.innerHTML += card;
    }

    return card;
  });

//  cargarJSON.forEach(producto => {
//      const div = document.createElement("div");
//     div.innerHTML = `<img src= ${producto.img} class = "img">
//  <h3>${producto.nombre}</h3>
// <p>$ ${producto.precio}</p>

// <button id = "agregar ${producto.id}" class = "boton-agregar"</button>
// `;

//  contenedorProductos.appendChild(div)

//    const boton = document.getElementById("agregar ${producto.id}")

// boton.addEventListener('click', () => {
//   agregarAlCarrito(producto.id)
//  })

//  })







 const agregarAlCarrito = (productosId) => {
     const item = productosTotales.find((prod) => prod.id === productosId)
     carrito.push(item)
     console.log(carrito);
 }

 const actualizacionCarrito = () => {

 carrito.forEach((prod) => {
     const div= document.getElementById('div')
 div.innerHTML=`
 <p>${prod.nombre}</p>
 <p>precio${prod.precio}</p>

 `

})

}}