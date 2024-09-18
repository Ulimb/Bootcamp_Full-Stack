// productos.js
const productos = [
    {
        nombre: 'Lomo x KG',
        descripcion: [
            'Lomo de ternera.',
            'El peso puede variar ligeramente.'
        ],
        precio: 8500,
        imagen: '../../../imagenes/categorías/carnes/lomo.jpg'
    },
    {
        nombre: 'Milanesas de pollo x KG',
        descripcion: [
            'Milanesas de carne de pechuga de pollo.',
            'El peso puede variar ligeramente'
        ],
        precio: 6000,
        imagen: '../../../imagenes/categorías/carnes/milanesas.jpg'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos-container');

    productos.forEach(producto => {
        const productoHTML = `
            <div class="d-flex container flex-nowrap p-0 border border-secondary border-1 rounded-4 mb-5">
                <div class="bg-secondary w-10 rounded-custom d-custom-hidden justify-content-center align-items-center">
                    <img src="${producto.imagen}" class="rounded-4" style="padding-left: 30px; padding-right: 30px; max-width: 200px; height: 150px;">
                </div>
                <div class="w-100">
                    <div class="text-white p-3 text-center bg-primary rounded-custom-h2">
                        <h2 class="m-0">${producto.nombre}</h2>
                    </div>
                    <div class="bg-secondary w-10 d-custom-show justify-content-center align-items-center text-center">
                        <img src="${producto.imagen}" style="max-width: 200px; height: 150px;">
                    </div>
                    <div class="d-flex w-100 m-0">
                        <div class="d-flex flex-column flex-grow-1 p-5 text-center border-end border-1 border-secondary">
                            ${producto.descripcion.map(linea => `<p class="mb-1">${linea}</p>`).join('')}
                        </div>
                        
                        <div class="d-flex flex-column flex-grow-1 p-3 w-50">
                            <div class="d-flex flex-column"> 
                                <div class="d-flex justify-content-between align-items-center mb-5">
                                    <p class="mb-0"><b>Precio x KG</b></p>
                                    <p class="mb-0">$${producto.precio}</p>
                                </div>
                                <button class="bg-primary w-100 d-flex align-items-center justify-content-start">
                                    <img src="../../../imagenes/iconos/shopping.png" width="25px" height="25px" class="me-2">
                                    <p class="mb-0 flex-grow-1 text-center text-white">Agregar al Carrito</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        productosContainer.innerHTML += productoHTML;
    });
});
