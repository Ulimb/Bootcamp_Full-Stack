const cart = JSON.parse(localStorage.getItem('cart')) || [];

function showCartWithProducts(cart) {
    const contentDiv = document.getElementById('content');
    let productRows = '';
    let totalDiscount = 0;
    let totalPrice = 0;

    cart.forEach((product) => {
        const priceAfterDiscount = product.precio - (product.precio * product.descuento / 100);
        const subtotal = priceAfterDiscount * product.cantidad;

        productRows += `
            <tr class="text-center" style="border-bottom: 1px solid black;">
                <td class="d-flex-custom text-center align-items-center p-0">
                    <div class="d-flex align-items-center bg-secondary p-2">
                        <img src="${product.imagen}" class="img-fluid rounded-2" style="max-height: 120px;">
                    </div>
                    <h5 class="fw-bold text-hidden m-0 ">${product.nombre}</h5>
                    <button class="btn btn-danger custom-btn" onclick="removeFromCart(${cart.indexOf(product)})">Eliminar</button>
                </td>
                <td class="border-custom bg-secondary">${product.cantidad}</td>
                <td class="border-custom ">$${priceAfterDiscount.toFixed(2)}</td>
                <td class="border-custom bg-secondary">$${subtotal.toFixed(2)}</td>
            </tr>
        `;

        totalDiscount += product.precio * product.descuento / 100 * product.cantidad;
        totalPrice += subtotal;
    });

    contentDiv.innerHTML = `
        <div class="container py-4 responsive-text">
            <h2>Ver Compra</h2>
        </div>
        <div class="container my-4 ">
            <table class="w-100 border border-dark ">
                <thead class="bg-primary text-white  responsive-text">
                    <tr class="text-center ">
                        <th >Producto</th>
                        <th class="border-custom">Unidades</th>
                        <th class="border-custom">Precio Unitario</th>
                        <th class="border-custom">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${productRows}
                </tbody>
            </table>
   <div class="container mt-4">
        <div class="row">
            <div class="col-md-6 col-12 d-flex align-items-center justify-content-between border border-dark radius-custom-start p-0">
                <h4 class="mb-0 ps-1">Descuento total</h4>
                <p class="mb-0 bg-secondary p-4 text-center w-50">$${totalDiscount.toFixed(1)}</p>
            </div>
            <div class="col-md-6 col-12 d-flex align-items-center justify-content-between border border-dark radius-custom-end p-0">
                <h4 class="mb-0 ps-2 ">Total</h4>
                <p class="mb-0 bg-secondary p-4 text-center w-50">$${totalPrice.toFixed(1)}</p>
            </div>
        </div>
    </div>
            <div class="text-center mt-4">
                <a  href="../Pagos/MedioDePago.html" class="bg-primary p-3 rounded-4 text-white px-5 border-0 text-decoration-none">
                    <img src="../../imagenes/iconos/credit-card.png" width="30px" height="30px" class="mx-2"> 
                    Continuar Compra 
                </a>
            </div>
        </div>
    `;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart.length === 0) {
        showEmptyCart();
    } else {
        showCartWithProducts(cart);
    }
}

function showEmptyCart() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div id="navbar-reutilizable"></div>
        <div class="container py-4 responsive-text">
            <h2>Ver Compra</h2>
        </div>
        <div class="container bg-gray text-center rounded-5 py-5 px-2 mb-5">
            <img src="../../imagenes/iconos/cart.png" class="img-fluid custom-cart-icon mb-4">
            <h5 class="text-black mb-4">Parece que tu carrito de compras está vacío!</h5>
            <a href="../Categorias/Categorias.html" class="bg-primary text-white px-4 py-2 rounded text-decoration-none mb-5">Ver Productos</a>
        </div>
    `;
}

if (!cart || cart.length === 0) {
    showEmptyCart();
} else {
    showCartWithProducts(cart);
}
