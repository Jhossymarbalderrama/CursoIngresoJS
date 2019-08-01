// Al presionar el botón pedir la CLAVE (ayuda: es utn750)
var clave;
var contador = 0;
var error = false;

function mostrar()
{
do{
  clave = prompt("ingrese el número clave.");
  contador += 1;

  if(clave == null){
      error = true;
      break
  }else{
    if(contador==3){
      alert("A ingresado su clave erroneamente 3 veces.");
      error = true;
      break
    }
  }
}while(clave != "utn750");

    if(error == true){
        alert("error");
    }else{
        alert("exito");
    }

/*
while(clave != "utn750"){
    contador += 1;

    if(contador==3){
      alert("A ingresado su clave erroneamente 3 veces.");
      break
    }else{
      alert("Clave Incorrecta, intente nuevamente");
      prompt("ingrese el número clave.");
    }
*/

}//FIN DE LA FUNCIÓN
