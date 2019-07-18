/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura;
var fahrenheit;
var centigrados;

function FahrenheitCentigrados () 
{
    fahrenheit = document.getElementById("Temperatura").value;
    temperatura = fahrenheit;
    temperatura = parseInt(temperatura);

    temperatura = temperatura - 32;
    centigrados = temperatura * 5/9;

    alert(fahrenheit+" Fahrenheit son "+centigrados+" Centigrados");
}

function CentigradosFahrenheit () 
{
    centigrados = document.getElementById("Temperatura").value;
    temperatura = centigrados;
    temperatura = parseInt(temperatura);

    temperatura = temperatura * 9/5;
    temperatura = temperatura + 32;

    alert(centigrados+" Centigrados son "+temperatura+" Fahrenheit");
}
