var precio;
var descuento;
var descuentodelprecio;
var total;

function mostrar()
{
    precio = prompt("Precio del Producto","Coloque aquí el precio");
    descuento = prompt("Porcentaje de Descuento","Coloque aquí el Descuento");

    precio = parseInt(precio);
    descuento = parseInt(descuento);
    descuentodelprecio = parseInt(descuentodelprecio);

    descuentodelprecio =  precio * descuento;
    total =  descuentodelprecio  / 100;

    document.getElementById("elPrecioFinal").value = total;
}
