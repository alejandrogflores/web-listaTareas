const cajaDeTexto = document.querySelector("input");
const botoncito = document.querySelector("button");
const listaTareas = document.querySelector("ul");

botoncito.addEventListener('click', () => {
    const valorIngresado = cajaDeTexto.value;
    const itemNuevo = document.createElement("li");

    itemNuevo.textContent = valorIngresado;
    listaTareas.appendChild(itemNuevo);
    cajaDeTexto.value = "";
})

