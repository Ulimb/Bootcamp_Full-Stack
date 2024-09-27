document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("ofertas-container");

    const productosConDescuento = Object.values(productosPorCategoria)
        .flat() // Une todos los arrays de productos de cada categoría en uno solo
        .filter((producto) => producto.descuento > 0); // Filtra productos con descuento mayor a 0

    // Algoritmo de Fisher-Yates para mezclar aleatoriamente el array
    for (let i = productosConDescuento.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productosConDescuento[i], productosConDescuento[j]] = [productosConDescuento[j], productosConDescuento[i]];
    }

    productosConDescuento.push(productosConDescuento[0], productosConDescuento[1], productosConDescuento[2], productosConDescuento[3]);

    productosContainer.innerHTML = "";

    productosConDescuento.forEach((producto, index) => {
        const productoHTML = `
        <div class="col-3 p-0 border" id="oferta-producto">
            <img src="${producto.imagen}" class="img-fluid imagen-atras" alt="Imagen de ${producto.nombre}" >
            <img src="../../imagenes/iconos/gradiente.png" class="img-fluid" id="gradiente">
            <p class="fw-bold text-center pt-2 titulo">${producto.nombre}</p>
            <div class="container rounded-2" id="cuadrito-descuento">
            <p class="fw-bold text-center texto-descuento">-${producto.descuento}%</p>
            </div>
            <p class="fw-light text-end precio-antes">$${producto.precio}</p>
            <p class="fw-bold text-end precio-despues">$${Math.round(producto.precio - (producto.precio * producto.descuento) / 100)}</p>
            <div class="container" id="tachonado"></div>
        </div>
        `;
        productosContainer.innerHTML += productoHTML;
    });

    function Clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function EaseSmoothstep(t) {
        let x = Clamp(t, 0, 1);
        return x * x * (3 - 2 * x);
    }

    function LinearStep(factor0Param, factor1Param, input, clamp) {
        const denom = factor1Param - factor0Param;
        if (denom === 0) {
            return input < factor0Param ? 0 : 1;
        }
        const t = (input - factor0Param) / denom;
        return clamp ? Clamp(t, 0, 1) : t;
    }

    function Lerp(a, b, t) {
        return a + (b - a) * t;
    }

    let animacionInicio = 0;
    let animacionFinal = 0;
    let leftPrev = 0;
    let leftPost = 0;
    let productoId = 0;

    function update() {
        let animLinearStep = LinearStep(animacionInicio, animacionFinal, Date.now(), true);
        let easedAnimStep = EaseSmoothstep(animLinearStep);
        let left = Lerp(leftPrev, leftPost, easedAnimStep);
        document.documentElement.style.setProperty("--ofertas-left", `-${(left * 100).toString()}%`);

        requestAnimationFrame(update);
    }

    update();

    function triggerEvent() {
        if (productoId >= productosConDescuento.length - 4) {
            productoId = 0;
        }
        animacionInicio = Date.now();
        animacionFinal = animacionInicio + 1000;
        leftPrev = productoId++ * 0.25;
        leftPost = productoId * 0.25;

        setTimeout(triggerEvent, 3000);
    }

    // Configura el timer para que dispare el evento después de 5 segundos (3000 ms)
    setTimeout(triggerEvent, 3000);
});
