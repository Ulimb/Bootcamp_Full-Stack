document.addEventListener('DOMContentLoaded', () => {
    cargarNavbar('navbar-home');
    cargarNavbar('navbar-categorias');
});

function cargarNavbar(elementId) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        fetch('../../Componentes/NavBar.html')
            .then(response => response.text())
            .then(template => {
                elemento.innerHTML = template;
                console.log(template);
                
            })
            .catch(error => console.error('Error al cargar el navbar:', error));
    }
}