// Al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");

  for(var contador = 0;contador<repeticiones;contador+=1){
    document.write("Hola UTN FRA"+"<br>");
  }


}//FIN DE LA FUNCIÓN
