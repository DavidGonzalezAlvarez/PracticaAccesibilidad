const boton_login = document.getElementById("boton-login");
const boton_perfil = document.getElementById("boton-perfil");
const productos = document.querySelectorAll(".product-card");
const botones_carrito = document.querySelectorAll(".boton-añadir-carrito");

boton_login.addEventListener("click", function() {
    window.location.href = "../pages/login.html";
});

boton_perfil.addEventListener("click", function() {
    window.location.href = "../pages/profile.html";
});

// Evento para cada producto
productos.forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = "../pages/product.html";
    });
});

// Evento para botones de añadir al carrito
botones_carrito.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento se propague al div padre
        console.log("Producto añadido al carrito");
        // Aquí puedes agregar la lógica para añadir el producto al carrito
    });
});