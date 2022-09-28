

// let nosotros = document.getElementById ("nosotros");
// let consulta = document.getElementById("consulta");

// consulta.addEventListener("keyup" , (e) => {
//     if(e.key === "enter"){
//         nosotros.className = "rojo";
//     }
// });

// console.log(consulta);


// --------------------------------

const cristales = [
    {id: 1, nombre: "Amatista", prrecio: 760},
    {id: 2, nombre: "Citrino", precio: 890},
    {id: 3, nombre: "Agata azul", precio: 850},
    {id: 4, nombre: "Cuarzo de cristal", precio: 800},
    {id: 5, nombre: "Cuarzo rosa", precio: 960},
    {id: 6, nombre: "Jaspe rojo", precio: 890},
    {id: 7, nombre: "Onix negro", precio: 950},
    {id: 8, nombre: "Turmalina negra", precio: 900},
];

const anillos = [
    {id: 1, nombre: "Anillo Amatista", prrecio: 1160},
    {id: 2, nombre: "Anillo de Citrino", precio: 1250},
    {id: 3, nombre: "Anillo de Agata azul", precio: 1050},
    {id: 4, nombre: "Anillo de Cuarzo de cristal", precio: 1200},
    {id: 5, nombre: "Anillo de Cuarzo rosa", precio: 1260},
    {id: 6, nombre: "Anillo de Jaspe rojo", precio: 1300},
    {id: 7, nombre: "Anillo de Onix negro", precio: 1350},
    {id: 8, nombre: "Anillo de Turmalina negra", precio: 1100},
];


localStorage.setItem("productos", JSON.stringify(cristales), JSON.stringify(anillos));

let carrito = [];
let productosStorage = JSON.parse(localStorage.getItem("carrito"));

if(productosStorage){
    carrito = productosStorage;
}

carrito.forEach(producto =>{
    let div = document.createElement("div");
div.innerHTML =`<h1>Carrito: ${producto.id}</h1>
<p>Nombre: ${producto.nombre}</p>
<b>$ ${producto.precio}</b>
`;
document.body.append(div);
});


