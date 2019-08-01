/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:*/ 
// 1-Suma de los negativos.
// 2-Suma de los positivos. 
// 3-Cantidad de positivos.
// 4-Cantidad de negativos.
// 5-Cantidad de ceros.
// 6-Cantidad de números pares.
// 7-Promedio de positivos.
// 8-Promedios de negativos.
// 9-Diferencia entre positivos y negativos, (positvos-negativos).

var sumaNega=0;
var sumaPosi=0;
var cantNega=0;
var cantPosi=0;
var cantCeros=0;
var cantNroPares=0;
var promedioPosi=0;
var promedioNega=0;
var diferenciaPosiNega=0;

var num;


function mostrar()
{
	while(confirm("Ingresar")){
			num = prompt("Ingrese los Valores","Ingrese aquí");
			num = parseInt(num);
				while(isNaN(num)){
					alert("Valor Invalido, solo se permiten valores Númericos");
					num = prompt("Ingrese los Valores","Ingrese aquí");
					num = parseInt(num);
				}


			if(num > 0){
				sumaPosi += num;
				cantPosi += 1;
					if(!(num /2 == 1)){
						cantNroPares += 1;	
					}
			}else if(num < 0){
				sumaNega -= num;
				cantNega += 1;
			}else{
				cantCeros += 1;
				cantNroPares += 1;
			}	
	}
		promedioPosi = sumaPosi / cantPosi;
		promedioNega = sumaNega / cantNega;
		diferenciaPosiNega = sumaPosi - sumaNega;

		document.write("Suma Total de Positivos: "+sumaPosi+"<br>");
		document.write("Suma Total de Negativos: "+sumaNega+"<br>")
		document.write("Cantidad de Positivos: "+cantPosi+"<br>");
		document.write("Cantidad de Negativos: "+cantNega+"<br>");
		document.write("Cantidad de Ceros: "+cantCeros+"<br>");
		document.write("Cantidad de Números Pares: "+cantNroPares+"<br>");
		document.write("Promedio Positivos: "+promedioPosi+"<br>");
		document.write("Promedio Negativos: "+promedioNega+"<br>");
		document.write("Diferencias entre Positivo y los Negativos: "+diferenciaPosiNega+"<br>");



	// var contador=0;
	// //declarar contadores y variables 

	// var respuesta="si";

	// while(respuesta!="no")
	// {
	// 	num = prompt("Ingrese los Valores");

		
	
	// }




}//FIN DE LA FUNCIÓN