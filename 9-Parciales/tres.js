//Enunciado:
//Bienvenidos. 
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
var precio;
var descuento=0;
var precioFinal;

function mostrar()
{
    precio = prompt("Ingrese el Precio del Producto","aquí");
    descuento = prompt("Ingrese el Descuento","aquí");
    precio = parseInt(precio);
    descuento = parseInt(descuento);

    precioFinal = (descuento * precio) / 100;
    
    document.getElementById("elPrecioFinal").value = precioFinal;
}
