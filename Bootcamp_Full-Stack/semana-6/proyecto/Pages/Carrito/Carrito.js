

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

if (!cart || cart.length === 0) {
    showEmptyCart();
} else {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="container py-4 responsive-text">
            <h2>Tu carrito tiene productos</h2>
            <!-- Aquí podrías agregar la lista de productos del carrito -->
        </div>
    `;
}
