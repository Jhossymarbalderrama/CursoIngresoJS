// Realizar el algoritmo que permita ingresar el nombre de una localidad, cantidad de habitantes en 
// millones entre 1 y 40 (validar) 
// La temperatura mínima que se registra en esa localidad(entre -50 y 50) hasta que el usuario quiera 
// e informar al terminar el ingreso por document.write: 

// a) La cantidad de temperaturas pares. 
// b) El nombre de la localidad con menos habitantes 
// c) La cantidad localidades que superan los 40 grados de temperatura. 
// d) El promedio de habitantes entre las localidades ingresadas	
// f) La temperatura mínima ingresada, y nombre de la localidad que registro esa temperatura.
var localidad;
var cantHabitantes;//entre 1 a 40
var temperatura=0;//-50 a 50

var tempPares=0;

var menosHabitantes=0;
var nombreMenorHabitantes;

function mostrar()
{
	do{
		localidad = prompt("Ingrese una Localidad");

		do{
			cantHabitantes = prompt("Ingrese la Cantidad de Habitantes","Ejemplor : 1 millones");
		}while(isNaN(cantHabitantes) ||cantHabitantes<1 || cantHabitantes>40 )

		do{
			temperatura = prompt("Ingrese la Temperatura de la Localidad");
		}while(isNaN(temperatura) || temperatura < -50 || temperatura > 50)
		//Validaciones listo

		//A
		if(temperatura % 2  == 0){
			tempPares += 1;
		}
		//Fin A

		//B
		if(menosHabitantes<cantHabitantes){
			nombreMenorHabitantes = localidad;
		}
		//Fin B

	}while(confirm("Desea Ingresar?"))

	document.write("La cantidad de temperaturas pares "+tempPares+"<br>");
	document.write("El nombre de la localidad con menos habitantes es "+nombreMenorHabitantes+"<br>");
}
// a) La cantidad de temperaturas pares. 
// b) El nombre de la localidad con menos habitantes 
// c) La cantidad localidades que superan los 40 grados de temperatura. 
// d) El promedio de habitantes entre las localidades ingresadas	
// f) La temperatura mínima ingresada, y nombre de la localidad que registro esa temperatura.