function mostrar()
{
  var num;
	var contador=0;
	var acumulador=0;

  while(contador<5){
      contador +=1;
      num = prompt("Sacar Promedio.");
      num = parseInt(num);
      // validar

      while(isNaN(num)){
        alert("Caracter Invalido");
        num = prompt("Sacar Promedio.");
        num = parseInt(num);
      }

      acumulador = acumulador + num;

  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
