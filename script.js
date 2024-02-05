const carritoProductos = [];

function agregarAlCarrito(producto, precio) {
    carritoProductos.push({ nombre: producto, precio: precio });
}

function mostrarCarrito() {
    const carritoPopup = document.getElementById('carrito-popup');
    carritoPopup.innerHTML = carritoProductos.length === 0
        ? '<p>El carrito está vacío.</p>'
        : carritoProductos.map(producto => `<p>${producto.nombre} - ${producto.precio}</p>`).join('');

    carritoPopup.style.display = 'block';
}

function toggleMenu() {
    const navDesplegable = document.querySelector('.nav-desplegable');
    navDesplegable.style.display = navDesplegable.style.display === 'none' || navDesplegable.style.display === '' ? 'block' : 'none';
}