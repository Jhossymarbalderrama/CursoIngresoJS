var notarandom;
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	notarandom = Math.floor(Math.random() * (10 - 1)) + 1 ;

  if(notarandom>=9){
    alert("Tu nota es: "+ notarandom + " Exelente");
  }else if(notarandom>=4 && notarandom<9){
    alert("Tu nota es: "+ notarandom + " Aprobo");
  }else{
    alert("Tu nota es: "+ notarandom + " Vamos, la proxima se puede");
  }

}//FIN DE LA FUNCIÓN
