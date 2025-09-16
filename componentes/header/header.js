// componentes/header/header.js
export function obtenerHeader() {
    let header = document.createElement("header");
    header.className = "header";
    header.textContent = "Lista de Compras";
   return header;
}