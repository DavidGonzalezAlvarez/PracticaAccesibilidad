const boton_carrito = document.getElementById("boton-carrito");
const carrito = document.getElementById("carrito");
const boton_login = document.getElementById("boton-login");

boton_carrito.addEventListener("click", function() {
    if (carrito.style.right === '25px') {
        carrito.style.right = '-510px';
    } else {
        carrito.style.right = '25px';
    }
});

boton_login.addEventListener("click", function() {
    window.location.href = "../pages/login.html";
});