
const contenedorProductos = document.getElementById('contenedorProductos');

const contenedorDelCarrito = document.getElementById('carritoContenedor')

let carrito = [];

productoPiedras.forEach(productop => {
    const div = document.createElement("div");
    div.innerHTML =   `<h2 class="nombrecristal">${productop.nombre}</h2>
    <img src= ${productop.img} class = "img">
<h3>${productop.nombre}</h3>
<p>$ ${productop.precio}</p>

<button id = "agregar${productop.id}" class = "boton-agregar"> Agregar al carrito</button>
`;

    contenedorProductos.appendChild(div)

    // const boton = document.getElementById("agregar ${productop.id}")

//  boton.addEventListener('click', () => {
//       agregarAlCarrito(productop.id)
//    })

})



const agregarAlCarrito = (productosId) => {
    const item = productoPiedras.find((prod) => prod.id === productosId)
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