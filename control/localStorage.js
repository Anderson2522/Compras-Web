const CARRITO = 'carrito';

function guardarProducto(producto) {
  
 let carrito = JSON.parse(localStorage.getItem(CARRITO)) || [];
 
  localStorage.setItem(CARRITO, JSON.stringify(carrito));
}

function obtenerProducto() {
  return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

export { CARRITO, guardarProducto, obtenerProducto };