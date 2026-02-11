
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




function toggleContenido(idElemento, boton) {
  const elemento = document.getElementById(idElemento);
  if (!elemento) return;

  elemento.classList.toggle("oculto");

  boton.textContent = elemento.classList.contains("oculto")
    ? "Mostrar"
    : "Ocultar";
}



function Saludo() {
  const saludo1 = document.getElementById("saludo");
  if (!saludo1) {
    console.log("No existe #saludo");
    return;
  }

  const hora = new Date().getHours();
  let mensaje = "";

  if (hora >= 6 && hora < 12) mensaje = "Buenos días";
  else if (hora >= 12 && hora < 18) mensaje = "Buenas tardes";
  else mensaje = "Buenas noches";

  saludo1.textContent = mensaje;
  console.log("Saludo puesto:", mensaje);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");
  Saludo();
});


// --- Buscador de habilidades ---
function setupSkillSearch() {
const input = document.getElementById("skill-search");
const ul = document.getElementById("habilidades-list");
if (!input || !ul) {
    console.warn("Buscador de habilidades: elementos no encontrados");
    return;
}

const items = Array.from(ul.querySelectorAll("li"));

// Filtrado 
input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (q === "") {
    // mostrar 
    items.forEach(li => li.classList.remove("habilidad-hidden"));
    return;
    }

    items.forEach(li => {
    const text = li.textContent.trim().toLowerCase();
    const match = text.includes(q);
    li.classList.toggle("habilidad-hidden", !match);
    });
});
}

