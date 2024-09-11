document.getElementById('estilo1').addEventListener('click', function() {
    document.body.classList.remove('high-contrast');
});

document.getElementById('alto-contraste').addEventListener('click', function() {
    document.body.classList.add('high-contrast');
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


document.querySelector('form').addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Validar el correo electrónico
    if (!emailPattern.test(emailInput)) {
        alert('Ingrese un correo electrónico válido. Ejemplo: usuario@dominio.com');
        event.preventDefault(); // Evita el envío del formulario
    }
});