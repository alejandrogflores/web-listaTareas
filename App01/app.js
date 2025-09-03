const botonElm = document.querySelector('#agregar');
const inputElm = document.querySelector('#tarea');
const listaElm = document.querySelector('#lista');

botonElm.addEventListener('click', () => {
  const valor = inputElm.value.trim();
  if (!valor) return;

  const li = document.createElement('li');
  li.textContent = valor;
  listaElm.appendChild(li);

  inputElm.value = '';
  inputElm.focus();
});


inputElm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') botonElm.click();
});


