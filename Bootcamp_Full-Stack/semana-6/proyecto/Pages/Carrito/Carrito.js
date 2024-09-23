const cart = JSON.parse(localStorage.getItem('cart'));

function showEmptyCart() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="container py-4 responsive-text">
            <h2>Ver Compra</h2>
        </div>
        <div class="container bg-gray text-center rounded-5 py-5 px-2 mb-5">
            <img src="../../imagenes/iconos/cart.png" class="img-fluid custom-cart-icon mb-4">
            <h5 class="text-black mb-4">Parece que tu carrito de compras está vacio!</h5>
            <a href="../Categorias/Categorias.html" class="bg-primary text-white px-4 py-2 rounded text-decoration-none mb-5">Ver Productos</a>
        </div>
    `;
}

function showCartWithProducts(cart) {
    const contentDiv = document.getElementById('content');
    let productRows = '';

    // Iterar sobre los productos del carrito
    cart.forEach(product => {
        const priceAfterDiscount = product.precio - (product.precio * product.descuento / 100);
        const subtotal = priceAfterDiscount * product.cantidad;

        productRows += `
            <tr class="text-center" style="border-bottom: 1px solid black;">
                <td class="d-flex text-center align-items-center p-0">
                    <div class="d-flex align-items-center bg-secondary p-2">
                        <img src="${product.imagen}" class="img-fluid rounded-2" style="max-height: 70px;">
                    </div>
                    <p class="fw-bold text-hidden m-0">${product.nombre}</p>
                </td>
                <td class="border-custom">${product.cantidad}</td>
                <td class="border-custom">$${priceAfterDiscount.toFixed(2)}</td>
                <td class="border-custom">$${subtotal.toFixed(2)}</td>
            </tr>
        `;
    });

    contentDiv.innerHTML = `
        <div class="container py-4 responsive-text">
            <h2>Tu carrito tiene productos</h2>
        </div>
        <div class="container my-4 border border-dark rounded shadow p-0">
            <table class="w-100 rounded-top-3">
                <thead class="bg-primary text-white">
                    <tr class="text-center">
                        <th>Producto</th>
                        <th class="border-custom">Unidades</th>
                        <th class="border-custom">Precio Unitario</th>
                        <th class="border-custom">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${productRows}
                </tbody>
            </table>
        </div>
    `;
}

if (!cart || cart.length === 0) {
    showEmptyCart();
} else {
    showCartWithProducts(cart);
}
