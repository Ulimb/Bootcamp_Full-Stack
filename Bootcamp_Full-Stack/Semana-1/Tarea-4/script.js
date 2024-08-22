// Selecciona los botones
const botonEstilo1 = document.getElementById('estilo1');
const botonAltoContraste = document.getElementById('alto-contraste');

// Función para cambiar el estilo
function cambiarEstilo(hojaEstilo) {
    document.getElementById('estilo-principal').setAttribute('href', hojaEstilo);
}

// Evento para cambiar al estilo 1
botonEstilo1.addEventListener('click', function() {
    cambiarEstilo('styles.css');
});

// Evento para cambiar al estilo de alto contraste
botonAltoContraste.addEventListener('click', function() {
    cambiarEstilo('styles-AC.css');
});

document.getElementById('birthdate').addEventListener('change', function(event) {
    var inputDate = new Date(this.value);
    var today = new Date();

    // Verificar si la fecha es futura
    if (inputDate > today) {
        alert('La fecha de nacimiento no puede ser en el futuro.');
        this.value = ''; // Limpia el campo si la fecha no es válida
        return;
    }

});