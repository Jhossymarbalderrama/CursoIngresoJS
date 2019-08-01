/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;
var resultado;
var iva21;

function Sumar () 
{
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value; 
    precio3 = document.getElementById("PrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3 ;

	alert("La suma Total es de: "+resultado);
}

function Promedio () 
{
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value; 
    precio3 = document.getElementById("PrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    resultado = parseInt(resultado); 
    
    resultado = precio1 + precio2 + precio3 ;
    resultado = resultado / 3;

	alert("La promedio Total es de: "+resultado);
}

function PrecioFinal () 
{
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value; 
    precio3 = document.getElementById("PrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    resultado = parseInt(resultado);

    resultado = precio1 + precio2 + precio3 ;

    iva21 = resultado * 0.21 ;//Sacamos el Iva

    resultado = resultado + iva21;

	alert("La suma Total es de: "+resultado+" + Iva al 21% que es : "+iva21);
}