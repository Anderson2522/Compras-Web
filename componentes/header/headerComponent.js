import { descargar } from "../download/download.js";

export function obtenerHeader() {
  let header = document.createElement("header");
  header.className = "header";

  let titulo = document.createElement("h1");
  titulo.textContent = "Lista de Compras";

  let icono = document.createElement("img");
  icono.src = "./assets/download.jpg"; 
  icono.alt = "Descargar";
  icono.className = "icono-descarga";

  // ✅ Captura toda la sección
  icono.addEventListener("click", () => {
    descargar("mi-section"); 
  });

  header.appendChild(titulo);
  header.appendChild(icono);

  return header;
}
