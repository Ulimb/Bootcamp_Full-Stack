// Selecciona los botones
const botonEstilo1 = document.getElementById('estilo1');
const botonAltoContraste = document.getElementById('alto-contraste');

// Función para cambiar el estilo
function cambiarEstilo(hojaEstilo) {
    document.getElementById('estilo-principal').setAttribute('href', hojaEstilo);
}

// Evento para cambiar al estilo 1
botonEstilo1.addEventListener('click', function() {
    cambiarEstilo('Ejercicio3.css');
});

// Evento para cambiar al estilo de alto contraste
botonAltoContraste.addEventListener('click', function() {
    cambiarEstilo('Ejercicio3-AC.css');
});