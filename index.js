
let nosotros = document.getElementById ("nosotros");
let consulta = document.getElementById("consulta");

consulta.addEventListener("keyup" , (e) => {
    if(e.key === "enter"){
        nosotros.className = "rojo";
    }
});

console.log(consulta);