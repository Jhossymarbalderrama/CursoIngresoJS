function mostrar()
{

var clave;
var contador = 0;
var error = false;
do{
  clave = prompt("ingrese el número clave.");
  contador += 1;

  if(contador==3){
    alert("A ingresado su clave erroneamente 3 veces.");
    error = true;
    break
  }

}while(clave != "utn750");

    if(error){
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
