var num;
var suma = 0;
var mult = 1;

function mostrar()
{
  while(confirm("Quiere Ingresar?..")){
    
    do{
      num = prompt("Ingrese el Numero");
      num = parseInt(num);
    }while(isNaN(num));
    
    
    if(num > 0){
      suma += num;
    }else{
      mult *= num;
    }

  }

document.getElementById('suma').value=suma;
document.getElementById('producto').value=mult;

}//FIN DE LA FUNCIÓN