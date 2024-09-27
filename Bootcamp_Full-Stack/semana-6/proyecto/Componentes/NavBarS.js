// const rutaNavBar = '../../Componentes/NavBar.html';

// document.addEventListener('DOMContentLoaded', () => {
//     cargarComponente('navbar-reutilizable', rutaNavBar);
// });

// function cargarComponente(elementId, ruta) {
//     const elemento = document.getElementById(elementId);
//     if (elemento) {
//         fetch(ruta)
//             .then(response => response.text())
//             .then(template => {
//                 elemento.innerHTML = template;
//                 console.log(template);

//             })
//             .catch(error => console.error('Error al cargar el navbar:', error));
//     }
// }

// const rutaNavBar = '../../../Componentes/NavBar.html';  // Ruta del navbar
// const rutaFooter = '../../../Componentes/Footer.html'; // Ruta del footer

// const rutaNavBar = '/semana-6/proyecto/Componentes/NavBar.html';
// const rutaFooter = '/semana-6/proyecto/Componentes/Footer.html';

// const rutaNavBar = '/Bootcamp_Full-Stack/semana-6/proyecto/Componentes/NavBar.html';
// const rutaFooter = '/Bootcamp_Full-Stack/semana-6/proyecto/Componentes/Footer.html';

const rutaNavBar = "../../Componentes/NavBar.html"; // Ruta del navbar
const rutaFooter = "../../Componentes/Footer.html";

document.addEventListener("DOMContentLoaded", () => {
    cargarComponente("navbar-reutilizable", rutaNavBar); // Cargar navbar
    cargarComponente("footer-reutilizable", rutaFooter); // Cargar footer
});

function adjustPadding() {
    const navbar = document.getElementById("header");
    if (navbar != undefined) {
        var navHeight = navbar.offsetHeight; // Obtener la altura del nav
        const nuevoValor = navHeight + "px"; // Ajustar padding-top en el body

        if (nuevoValor != document.body.style.paddingTop) {
            document.body.style.paddingTop = nuevoValor;
            window.scrollTo(0, 0);
        }
    }
}

function cargarComponente(elementId, ruta) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        fetch(ruta)
            .then((response) => response.text())
            .then((template) => {
                elemento.outerHTML = template;
                console.log(`Componente ${elementId} cargado`);
            })
            .catch((error) => console.error(`Error al cargar el componente ${elementId}:`, error));
    }

    return elemento;
}

function update() {
    adjustPadding();

    requestAnimationFrame(update);
}

update();

// document.addEventListener("DOMContentLoaded", function () {
//     // Función para ajustar el margen superior dinámicamente
//     function adjustPadding() {
//         var navHeight = document.querySelector("nav").offsetHeight; // Obtener la altura del nav
//         document.body.style.paddingTop = navHeight + "px"; // Ajustar padding-top en el body
//     }

//     // Ejecutar la función al cargar la página
//     //window.addEventListener("load", adjustPadding);

//     // Ejecutar la función cada vez que la ventana cambia de tamaño (para responsividad)
//     window.addEventListener("resize", adjustPadding);

//     function update() {
//         console.log("Ho");
//         console.log(document.getElementById("jaja"));
//         adjustPadding();
//         console.log("Hola");

//         requestAnimationFrame(update);
//     }

//     // update();
//     requestAnimationFrame(update);
// });
