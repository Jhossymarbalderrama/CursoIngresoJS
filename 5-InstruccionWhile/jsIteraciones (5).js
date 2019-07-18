function mostrar()
{

var sexo = prompt("ingrese f ó m .");

  do {
      alert("indefinido");
      sexo = prompt("ingrese f ó m .");
      if(sexo=="f" || sexo == "m"){
          document.getElementById('Sexo').value=sexo;
        break
      }
  }while(!(sexo=="f" || sexo == "m"));

}//FIN DE LA FUNCIÓN
