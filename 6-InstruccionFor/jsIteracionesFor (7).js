// Al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
// y mostrar la cantidad de numeros divisores encontrados.
var numero;
var contador = 0;

function mostrar()
{
  do{
    numero = prompt("Ingrese aquí");
    numero = parseInt(numero);
  }while(isNaN(numero));

  for(var i = 1; i<numero; i+=1){
    if(numero & i == 0){
      contador +=1;
      console.log(i);
    }
  }


}//FIN DE LA FUNCIÓN
