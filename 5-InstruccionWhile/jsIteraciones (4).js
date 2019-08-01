function mostrar()
{
  var numero;

  do{
    numero = parseInt(numero);
    numero = prompt("ingrese un número entre 0 y 10.");
    /*while 2 = verifico que sea numerico y no char*/
    while(isNaN(numero)){
      numero = prompt("ingrese un número entre 0 y 10.");
      numero = parseInt(numero);
    }
  }while(numero<0 || numero>9);

   document.getElementById("Numero").value = numero;



  /*while 1 = valido que este en el rango de 0 y 9*/
  // while(numero<0 || numero>9){
  //   numero = prompt("ingrese un número entre 0 y 10.");
  //   numero = parseInt(numero);
  //   /*while 2 = verifico que sea numerico y no char*/
  //   while(isNaN(numero)){
  //     numero = prompt("ingrese un número entre 0 y 10.");
  //     numero = parseInt(numero);
  //   }
  //   break
  // }
  // document.getElementById("Numero").value = numero;

/* JB ejercicio 4
  while(true){
    if(numero>=0 && numero<=9){
      document.getElementById("Numero").value = numero;
      break
    }else{
      //alert("Numero incorrecto");
      break
    }
 */
}//FIN DE LA FUNCIÓN
