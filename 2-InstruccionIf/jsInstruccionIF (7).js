var edad;
var estadocivil;

function mostrar()
{
//tomo la edad

edad = document.getElementById("edad").value;
estadocivil = document.getElementById("estadoCivil").value;

  if(edad<18 && estadocivil !="Soltero"){
    alert("Es muy pequeño para No ser Soltero");
  }else{
    alert("Perfecto");
  }

}//FIN DE LA FUNCIÓN
