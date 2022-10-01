

localStorage.setItem("productos", JSON.stringify(productosTotales));


let productosStorage = JSON.parse(localStorage.getItem("carrito"));

if (productosStorage) {
    carrito = productosStorage;
}


const contenedorProductos = document.getElementById('contenedorProductos');

const contenedorDelCarrito = document.getElementById('carritoContenedor')

let carrito = [];

productosTotales.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `<img src= ${producto.img} class = "img">
<h3>${producto.nombre}</h3>
<p>$ ${producto.precio}</p>

<button id = "agregar ${producto.id}" class = "boton-agregar"</button>
`;

    contenedorProductos.appendChild(div)

    const boton = document.getElementById("agregar ${producto.id}")

    // boton.addEventListener('click', () => {
    //     agregarAlCarrito(producto.id)
    // })

})



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

}