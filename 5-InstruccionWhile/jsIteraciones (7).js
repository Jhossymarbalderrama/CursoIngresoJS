// Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.

function mostrar()
{
      var contador=0;
      var acumulador=0;
      var respuesta='Si';

      while(true){
          do{
              // contador = prompt("pto el que lee");
              acumulador = prompt("Sacar el Promedio de Notas");
              if(acumulador == null){
                break;
              }
              acumulador = parseInt(acumulador);
         }while(isNaN(acumulador));
          if(acumulador == null){
            break
          }

      }
      document.getElementById('suma').value=acumulador;
      document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
