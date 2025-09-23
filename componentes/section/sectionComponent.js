export function obtenerSection() {
  let section = document.createElement("section");
  section.className = "section";
  section.id = "mi-section";

  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.placeholder = "Producto";

  let inputPrecio = document.createElement("input");
  inputPrecio.type = "number";
  inputPrecio.placeholder = "Q 0.00";

  let btnAgregar = document.createElement("button");
  btnAgregar.textContent = "Agregar";

  let lista = document.createElement("ul");
  lista.className = "lista-compras";

  let totalTexto = document.createElement("p");
  totalTexto.className = "total";
  totalTexto.textContent = "Q 0.00";

  // --- lógica de productos ---
  function actualizarTotal() {
    let items = lista.querySelectorAll("li");
    let total = 0;
    items.forEach(li => {
      total += parseFloat(li.getAttribute("data-precio")) || 0;
    });
    totalTexto.textContent = `Q ${total.toFixed(2)}`;
  }

  btnAgregar.addEventListener("click", () => {
    let nombre = inputNombre.value.trim();
    let precio = parseFloat(inputPrecio.value);

    if (nombre && !isNaN(precio)) {
      let item = document.createElement("li");
      item.textContent = `${nombre} - Q ${precio.toFixed(2)}`;
      item.setAttribute("data-precio", precio);

      let btnEliminar = document.createElement("button");
      btnEliminar.textContent = "X";
      btnEliminar.className = "btn-eliminar";

      btnEliminar.addEventListener("click", () => {
        item.remove();
        actualizarTotal();
      });

      item.appendChild(btnEliminar);
      lista.appendChild(item);
      actualizarTotal();

      inputNombre.value = "";
      inputPrecio.value = "";
    }
  });

  // ✅ Agregar elementos en el orden correcto
  section.appendChild(inputNombre);
  section.appendChild(inputPrecio);
  section.appendChild(btnAgregar);
  section.appendChild(lista);
  section.appendChild(totalTexto);

  return section;
}