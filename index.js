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

let nombrePiedra = prompt("Ingrese la piedra de su preferencia");

const piedras = [
    {id: 1, nombre: "Cuarzo azul", precio: 800},
    {id: 2, nombre: "Agata azul", precio: 880},
    {id: 3, nombre: "Citrino", precio: 790},
    {id: 4, nombre: "Turmalina negra", precio: 900
    },
];

console.log(nombrePiedra);


function mostrarPiedra(piedras){
let piedraDeSuPreferencia = piedras.find((item) => nombrePiedra === item.nombre);

alert( `La piedra de su preferencia es  ${piedraDeSuPreferencia.nombre} y cuesta ${piedraDeSuPreferencia.precio}`
);
}

mostrarPiedra(piedras);

//   EJEMPLO: la persona elige dos piedras que quiere comprar

let compraDePiedras1 = prompt("Ingrese el nombre de la piedra a comprar");
console.log(compraDePiedras1);
let compraDePiedras2 = prompt("Ingrese el nombre de la piedra a comprar");
console.log(compraDePiedras2);

const precioPiedra1 = piedras.find(piedras => piedras.nombre === compraDePiedras1);
console.log(precioPiedra1.precio);
const precioPiedra2 = piedras.find(piedras => piedras.nombre === compraDePiedras2);
console.log(precioPiedra2.precio);
var miTotal = 0
var resultado= miTotal + precioPiedra1 + precioPiedra2


function costoTotal(piedras) {
    let todasLasPiedras = piedras.find((item) => compraDePiedras1 === item.precio) + piedras.find((item) => compraDePiedras2 === item.precio);
    alert (`El costo total de los productos: ${compraDePiedras1} y ${compraDePiedras2} es: ${resultado}`);
}

costoTotal(piedras);


























// function sumar (miTotal, compraDePiedras1, compraDePiedras2){
//    let costo = miTotal + compraDePiedras1 + compraDePiedras2;
//    alert (`El costo total de los productos: ${compraDePiedras1} y ${compraDePiedras2} es: ${costo}`);
//     console.log(sumar);
//  }

//  sumar();























// function total(piedras){
//     let compra = miTotal + piedras.find(item.precio);
//     alert (`El costo total de los productos: ${compraDePiedras1} y ${compraDePiedras2} es: ${compra}`);
// }

// total();



// function sumar (miTotal, compraDePiedras1, compraDePiedras2){
//     let costo = miTotal + compraDePiedras1 + compraDePiedras2;
//     alert (`El costo total de los productos: ${compraDePiedras1} y ${compraDePiedras2} es: ${costo}`);
//     console.log(sumar);
// }

// sumar();


// function compraTotal(compra){
//     
//     
//     }

//  compraTotal();