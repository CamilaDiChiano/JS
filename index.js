
// ENTREGA 1

let numero = prompt("Ingrese su edad para obtener acceso");

while( numero > 15);{
    alert("No puedes ingresar al sitio");
    numero  = prompt("Ingrese su edad para obtener acceso");
}

alert("Bienvenid@");






// ENTREGA 2


// Promedio

function promedio(nota1, nota2, nota3){
    console.log((nota1 + nota2 + nota3)/3);
}

promedio(6,8,8);

// ---------------------------------------------


// Calcular costo total de productos y/o servicios seleccionados por el usuario.


var miTotal = 0
var monitor = 64000;
var cpu = 51000;
var teclado = 7000;
var mouse = 1500;
var suma = miTotal + monitor + cpu + teclado + mouse;

function costoTotal(seleccionados){
   this.seleccionados = seleccionados
   console.log(suma);
}

costoTotal();
