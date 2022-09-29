

// let nosotros = document.getElementById ("nosotros");
// let consulta = document.getElementById("consulta");

// consulta.addEventListener("keyup" , (e) => {
//     if(e.key === "enter"){
//         nosotros.className = "rojo";
//     }
// });

// console.log(consulta);


// --------------------------------

const productosTotales = [
    {id: 1, nombre: "Amatista", prrecio: 760},
    {id: 2, nombre: "Citrino", precio: 890},
    {id: 3, nombre: "Agata azul", precio: 850},
    {id: 4, nombre: "Cuarzo de cristal", precio: 800},
    {id: 5, nombre: "Cuarzo rosa", precio: 960},
    {id: 6, nombre: "Jaspe rojo", precio: 890},
    {id: 7, nombre: "Onix negro", precio: 950},
    {id: 8, nombre: "Turmalina negra", precio: 900},
    {id: 9, nombre: "Anillo Amatista", prrecio: 1160},
    {id: 10, nombre: "Anillo de Citrino", precio: 1250},
    {id: 11, nombre: "Anillo de Agata azul", precio: 1050},
    {id: 12, nombre: "Anillo de Cuarzo de cristal", precio: 1200},
    {id: 13, nombre: "Anillo de Cuarzo rosa", precio: 1260},
    {id: 14, nombre: "Anillo de Jaspe rojo", precio: 1300},
    {id: 15, nombre: "Anillo de Onix negro", precio: 1350},
    {id: 16, nombre: "Anillo de Turmalina negra", precio: 1100},
];


localStorage.setItem("productos", JSON.stringify(productosTotales));

let carrito = [];
let productosStorage = JSON.parse(localStorage.getItem("carrito"));

if(productosStorage){
    carrito = productosStorage;
}


productosTotales.forEach(producto =>{
    let div = document.createElement("div");
div.innerHTML =`<h1>Carrito: ${producto.id}</h1>
<p>Nombre: ${producto.nombre}</p>
<p>$ ${producto.precio}</p>
<button id = "agregar ${producto.id}" class = "boton-agregar"</button>
`;

 document.body.append(div);

const boton = document.getElementById("agregar ${producto.id}")

button.addEventListener("click", () => {
    agregarAlCarrito(productosTotales.id)
})

});


const agregarAlCarrito = (productosId) => {
    const item = productosTotales.find((prod) => prod.id === productosId)
    carrito.push(item)
    console.log(carrito);
}