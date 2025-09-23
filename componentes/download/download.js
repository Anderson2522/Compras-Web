function descargar(nombreContenedor) {
  const div = document.getElementById(nombreContenedor);

  if (!div) {
    console.error("No se encontró el contenedor:", nombreContenedor);
    return;
  }

  // ✅ Ocultar inputs y botón temporalmente
  const inputs = div.querySelectorAll('input, button');
  inputs.forEach(elemento => {
    elemento.classList.add('ocultar-en-captura');
  });

  html2canvas(div, { backgroundColor: null }).then(canvas => {
    // ✅ Restaurar la visibilidad después de capturar
    inputs.forEach(elemento => {
      elemento.classList.remove('ocultar-en-captura');
    });

    const enlace = document.createElement("a");
    enlace.href = canvas.toDataURL("image/png");
    enlace.download = "factura.png";
    enlace.click();
  });
}

export { descargar };