var num;
var max;
var min;
var primeravez= true;

function mostrar()
{
	while(confirm("Desea Ingresar??..")){

		do{
			num = prompt("Ingrese el Valor Numerico");
			num = parseInt(num);
		}while(isNaN(num))

			if(primeravez){
				primeravez = false;
				max= num;
				min = num;
			}else{
				max = num;
			}
	}
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN