
const dayjs = require('dayjs');

function modoOscuro() {
document.body.classList.toggle("oscuro");
}


function Hora() {
  const hora = dayjs().hour();

  if (hora >= 5 && hora < 12) return "Buenos días";
  if (hora >= 12 && hora < 18) return "Buenas tardes";
  return "Buenas noches";
}

function Saludo(){
    const saludo1 = document.getElementById("saludo")
    if(!saludo1) return;
    const hora = new Date().getHours();
    let mensaje = "";
    if (hora >= 6 && hora < 12) mensaje = "Buenos días";
    else if(hora >= 12 && hora <18) mensaje ="Buenas noches";
    else mensaje = "Buenas noches"
    saludo1.textContent = mensaje;
}

document.addEventListener("DOMContentLoaded", Saludo);



const btn = document.getElementById("btnToggle");
const bloque = document.getElementById("bloque");


function toggleContenido(idElemento, boton) {
  const elemento = document.getElementById(idElemento);
  if (!elemento) return;

  elemento.classList.toggle("oculto");

  boton.textContent = elemento.classList.contains("oculto")
    ? "Mostrar"
    : "Ocultar";
}

