
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

document.getElementById("saludo").textContent = Hora();


