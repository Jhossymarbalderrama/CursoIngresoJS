var edad;

function mostrar()
{
//tomo la edad
  edad = document.getElementById("edad").value;

  if(edad>=18){
    alert("Es mayor de Edad");
  }
  if(edad>13 && edad<=17){
    alert("Es adolescente");
  }else

  if(edad<=13){
    alert("Es un Niño");
  }

}//FIN DE LA FUNCIÓN
