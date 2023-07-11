// Obtener los elementos del DOM
const modeloInput = document.getElementById('modelo');
const desdeInput = document.getElementById('desde');
const hastaInput = document.getElementById('hasta');
const cards = Array.from(document.querySelectorAll('.cards .card'));
const totalElement = document.getElementById('total');

// Manejar el evento click del botón "Buscar"
document.getElementById('buscar').addEventListener('click', filtrarModelos);

// Función para filtrar los modelos de automóviles
function filtrarModelos() {
  // Obtener los valores de los campos de texto
  const modelo = modeloInput.value.toLowerCase();
  const desde = parseFloat(desdeInput.value);
  const hasta = parseFloat(hastaInput.value);

  // Filtrar las cartas según los valores ingresados
  const cartasFiltradas = cards.filter((card) => {
    const titulo = card.querySelector('.card-title').textContent.toLowerCase();
    const precio = parseFloat(card.querySelector('.Precio').textContent.replace(/[^0-9.]/g, ''));
    const modeloCarta = card.querySelector('.modelo').textContent.toLowerCase();

    const cumpleModelo = modelo === '' || modeloCarta.includes(modelo);
    const cumpleDesde = isNaN(desde) || precio >= desde;
    const cumpleHasta = isNaN(hasta) || precio <= hasta;

    return cumpleModelo && cumpleDesde && cumpleHasta;
  });

  // Mostrar las cartas filtradas y ocultar las demás
  cards.forEach((card) => {
    if (cartasFiltradas.includes(card)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Actualizar el número total de modelos filtrados
  totalElement.textContent = `Total: ${cartasFiltradas.length}`;
}

