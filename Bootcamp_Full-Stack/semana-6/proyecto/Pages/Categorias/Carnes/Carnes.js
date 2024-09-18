const productos = [
    {
        nombre: 'Lomo x KG',
        descripcion: [
            'Lomo de ternera.',
            'El peso puede variar ligeramente.'
        ],
        precio: 8500,
        imagen: '../../../imagenes/categorías/carnes/lomo.jpg',
        descuento: 20
    },
    {
        nombre: 'Milanesas de pollo x KG',
        descripcion: [
            'Milanesas de carne de pechuga de pollo.',
            'El peso puede variar ligeramente.'
        ],
        precio: 6000,
        imagen: '../../../imagenes/categorías/carnes/milanesas.jpg',
        descuento: 0
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos-container');
    
    productosContainer.innerHTML = '';

    productos.forEach((producto, index) => {
        const precioConDescuento = producto.precio - (producto.precio * (producto.descuento / 100));

        const precioHTML = producto.descuento > 0 ? `
            <p class="price-original text-decoration-line-through">$${producto.precio.toFixed(2)}</p>
        ` : `
            <p class="fw-bold">$${producto.precio.toFixed(2)}</p>
        `;

        const descuentoHTML = producto.descuento > 0 ? `
         <div class="row d-flex align-items-center h-25 p-2">
                            <div class="col-6 position-relative d-flex"> 
                                <img src="../../../imagenes/iconos/oferta.png" class="img-ofertas" alt="Icono oferta">
                                <p class="price-ofertas">${producto.descuento}%</p>
                            </div>
                            <div class="col-6" id="precio-producto-${index}">
                                 <p class="fw-bold text-danger mb-0">$${precioConDescuento.toFixed(2)}</p>
                            </div>
                        </div>
        ` : '';

        const productoHTML = `
            <div class="container mb-5" id="producto-${index}">
                <div class="row">
                    <div class="col-12 bg-primary rounded-custom-h2">
                        <div class="text-white p-3 text-center">
                            <h2 class="m-0">${producto.nombre}</h2>
                        </div>
                    </div>
                </div>
                <div class="row border border-1 border-secondary">
                    <div class="col-12 col-sm-12 col-md-3 bg-secondary p-4">
                        <img src="${producto.imagen}" class="img-fluid rounded-5" alt="Imagen de ${producto.nombre}">
                        
                    </div> 
                    <div class="col-12 col-sm-12 col-md-4 d-flex align-items-center justify-content-center border-custom border-1 border-secondary">
                        <div class="p-5 text-center">
                            ${producto.descripcion.map(linea => `<p class="mb-1">${linea}</p>`).join('')}
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-5">
                        <div class="row d-flex align-items-center h-25 p-2">
                            <div class="col-6">
                                <p class="fw-bold">Precio x KG</p>
                            </div>
                            <div class="col-6" id="precio-producto-${index}">
                                ${precioHTML}
                            </div>
                        </div>
                        ${descuentoHTML}
                        <div class="row d-flex align-items-center h-25 p-2" id="cart-btn-${index}">
                            <div class="col-12">
                                <button class="bg-primary w-100 d-flex align-items-center justify-content-start btn-add-cart" data-index="${index}">
                                    <img src="../../../imagenes/iconos/shopping.png" width="25px" height="25px" class="me-2">
                                    <p class="mb-0 flex-grow-1 text-center text-white">Agregar al Carrito</p>
                                </button>
                            </div>
                        </div>
                        <div class="row d-flex align-items-center h-25 p-2">
                            <div class="col-6">
                                <p class="fw-bold">Subtotal:</p>
                            </div>
                            <div class="col-6">
                                <p class="fw-bold" id="subtotal-${index}">$${precioConDescuento.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        productosContainer.innerHTML += productoHTML;
    });

    const addCartEventListeners = () => {
        document.querySelectorAll('.btn-add-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.closest('.btn-add-cart').dataset.index;
                const cartBtnContainer = document.getElementById(`cart-btn-${index}`);
                const precioConDescuento = productos[index].precio - (productos[index].precio * (productos[index].descuento / 100));
    
                cartBtnContainer.innerHTML = `
                    <div class="col-12 d-flex justify-content-center">
                        <div class="bg-primary quantity-container d-flex align-items-center justify-content-between p-2 w-50">
                            <p class="text-white mb-0">Unidades</p>
                            <div class="d-flex align-items-center">
                                <button class="btn-decrease" data-index="${index}">-</button>
                                <p class="mb-0 units bg-white mx-3 p-2 rounded" id="units-${index}">1</p>
                                <button class="btn-increase" data-index="${index}">+</button>
                            </div>
                        </div>
                    </div>
                `;
    
                const updateSubtotal = (units) => {
                    const newSubtotal = precioConDescuento * units;
                    document.getElementById(`subtotal-${index}`).innerText = `$${newSubtotal.toFixed(2)}`;
                };
    
                document.querySelector(`.btn-decrease[data-index="${index}"]`).addEventListener('click', () => {
                    const unitsElement = document.getElementById(`units-${index}`);
                    let currentUnits = parseInt(unitsElement.innerText);
    
                    if (currentUnits > 1) {
                        currentUnits -= 1;
                        unitsElement.innerText = currentUnits;
                        updateSubtotal(currentUnits);  
                    } else {
                        cartBtnContainer.innerHTML = `
                            <div class="col-12">
                                <button class="bg-primary w-100 d-flex align-items-center justify-content-start btn-add-cart" data-index="${index}">
                                    <img src="../../../imagenes/iconos/shopping.png" width="25px" height="25px" class="me-2">
                                    <p class="mb-0 flex-grow-1 text-center text-white">Agregar al Carrito</p>
                                </button>
                            </div>
                        `;
                        addCartEventListeners();
                    }
                });
    
                document.querySelector(`.btn-increase[data-index="${index}"]`).addEventListener('click', () => {
                    const unitsElement = document.getElementById(`units-${index}`);
                    let currentUnits = parseInt(unitsElement.innerText);
                    currentUnits += 1;
                    unitsElement.innerText = currentUnits;
                    updateSubtotal(currentUnits); // Actualizar subtotal
                });
            });
        });
    };
    
    addCartEventListeners();
    
});




