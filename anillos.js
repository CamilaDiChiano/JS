
const contenedorProductos = document.getElementById('contenedorProductos');

const contenedorDelCarrito = document.getElementById('carritoContenedor')

let carrito = [];

productoAnillos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = 
    `<h2 class="nombrecristal">${producto.nombre}</h2>
    <img src= ${producto.img} class = "img">
<h3>${producto.nombre}</h3>
<p>$ ${producto.precio}</p>

<button id = "agregar${producto.id}" class = "boton-agregar"> Agregar al carrito</button>
`;

    contenedorProductos.appendChild(div)

    const boton = document.getElementById("agregar ${producto.id}")

    // boton.addEventListener('click', () => {
    //     agregarAlCarrito(producto.id)
    // })

})



const agregarAlCarrito = (productosId) => {
    const item = productoAnillos.find((prod) => prod.id === productosId)
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