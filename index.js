// // ENTREGA 1

// let numero = prompt("Ingrese su edad para obtener acceso");

// while( numero > 15);{
//     alert("No puedes ingresar al sitio");
//     numero  = prompt("Ingrese su edad para obtener acceso");
// }

// alert("Bienvenid@");





// // ENTREGA 2


// // Promedio

// function promedio(nota1, nota2, nota3){
//     console.log((nota1 + nota2 + nota3)/3);
// }

// promedio(6,8,8);

// // ---------------------------------------------


// // Calcular costo total de productos y/o servicios seleccionados por el usuario.


// var miTotal = 0
// var monitor = 64000;
// var cpu = 51000;
// var teclado = 7000;
// var mouse = 1500;
// var suma = miTotal + monitor + cpu + teclado + mouse;

// function costoTotal(seleccionados){
//    this.seleccionados = seleccionados
//    console.log(suma);
// }

// costoTotal();


// ---------------------------------------------------------------------------

// ARRAY

// const piedras = [
//     {id: 1, nombre: "Cuarzo azul", precio: 800},
//     {id: 2, nombre: "Agata azul", precio: 880},
//     {id: 3, nombre: "Citrino", precio: 790},
//     {id: 4, nombre: "Turmalina negra", precio: 900
//     },
// ];

// for (const item of piedras) {
//     console.log(item.nombre);
//     console.log(item.precio);
// }










// PRIMERA ENTREGA

// let nombrePiedra = prompt("Ingrese la piedra de su preferencia");

// const piedras = [
//     {id: 1, nombre: "Cuarzo azul", precio: 800},
//     {id: 2, nombre: "Agata azul", precio: 880},
//     {id: 3, nombre: "Citrino", precio: 790},
//     {id: 4, nombre: "Turmalina negra", precio: 900
//     },
// ];

// console.log(nombrePiedra);


// function mostrarPiedra(piedras){
// let piedraDeSuPreferencia = piedras.find((item) => nombrePiedra === item.nombre);

// alert( `La piedra de su preferencia es  ${piedraDeSuPreferencia.nombre} y cuesta ${piedraDeSuPreferencia.precio}`
// );
// }

// mostrarPiedra(piedras);

// //   EJEMPLO: la persona elige dos piedras que quiere comprar

// let compraDePiedras1 = prompt("Ingrese el nombre de la piedra a comprar");
// console.log(compraDePiedras1);
// let compraDePiedras2 = prompt("Ingrese el nombre de la piedra a comprar");
// console.log(compraDePiedras2);

// let precioPiedra1 = piedras.filter(piedras => piedras.nombre === compraDePiedras1);
// console.log(precioPiedra1.precio);

// const precioPiedra2 = piedras.filter(piedras => piedras.nombre === compraDePiedras2);
// console.log(precioPiedra2.precio);

// var miTotal = 0
// var resultado= miTotal + precioPiedra1 + precioPiedra2

// function sumar (miTotal, compraDePiedras1, compraDePiedras2){
//  alert (`El costo total de los productos: ${compraDePiedras1} y ${compraDePiedras2} es: ${resultado}`);
//   }

// sumar();

















// DOM



let pagina = prompt("¿Que seccion le gustaria ver?");
 let contenedor = document.getElementById("cristales");
 if (pagina === "anillos"){
 let productoAnillos = [
     {id: 1, nombre: "Cuarzo azul", precio: 800},
     {id: 2, nombre: "Agata azul", precio: 880},
     {id: 3, nombre: "Citrino", precio: 790},
     {id: 4, nombre: "Turmalina negra", precio: 900
     },
 ];
 for (const producto of productoAnillos){
     let div = document.createElement ("div");
     div.innerHTML=`     <h2> ID: ${producto.id}</h2>
     <p> producto: ${producto.nombre} </p>
     <b>$${producto.precio}</b>
    `;
     contenedor.append(div);
} } else if (pagina === "collares");

let productoCollares = [
    {id: 1, nombre: "Cuarzo azul", precio: 1200},
    {id: 2, nombre: "Agata azul", precio: 1180},
    {id: 3, nombre: "Citrino", precio: 1290},
    {id: 4, nombre: "Turmalina negra", precio: 1150
    },
];
for (const producto of productoCollares){
    let div = document.createElement ("div");
    div.innerHTML=`     <h2> ID: ${producto.id}</h2>
    <p> producto: ${producto.nombre} </p>
    <b>$${producto.precio}</b>
   `;
    contenedor.append(div);

}




