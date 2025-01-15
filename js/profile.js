const boton_carrito = document.getElementById("boton-carrito");
const carrito = document.getElementById("carrito");

boton_carrito.addEventListener("click", function() {
    if (carrito.style.right === '25px') {
        carrito.style.right = '-510px';
    } else {
        carrito.style.right = '25px';
    }
});