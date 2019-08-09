// Enunciado:
// Bienvenidos. 
// Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
// a) El promedio de las notas totales. 
// b) La nota más baja y el sexo de esa persona. 
// c) La cantidad de varones que su nota haya sido mayor o igual a 6.

var nota;
var sexo;
var cantAlumnos=0;
var totalNotas=0;
var promedioTotal=0;

var notaBaja;
var sexoNotaBaja;
var primeraVezNotaBaja = true;

var cantVarones=0;

function mostrar(){

    while(cantAlumnos<5){
        nota = prompt("Ingrese la Nota");
            while(!(nota>=0 && nota<=10)){
                nota = prompt("Ingrese Nuevamente la Nota (El valor valido es entre 0 y 10");
            }
            
        sexo = prompt("Ingrese el Sexo");
            while(!(sexo == "f" || sexo == "m")){
                sexo = prompt("Ingrese nuevamente el Sexo (Ej: f o m)");
            }
  
        if(primeraVezNotaBaja){
            primeraVezNotaBaja = false;
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }

        if(nota < notaBaja){
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }

        if(sexo =="m" && nota >=6){
            cantVarones+=1;
        }

        totalNotas = parseFloat(totalNotas);
        nota = parseInt(nota);
        
        cantAlumnos+=1;
        totalNotas = totalNotas+ nota;
    
    }

    if(cantAlumnos == 5){
        totalNotas = parseFloat(totalNotas);
        promedioTotal = totalNotas / 5;

        alert("El promedio de las notas Totales es de: "+promedioTotal);
        alert("La Nota mas baja es: "+notaBaja+" del Sexo: "+sexoNotaBaja);
        alert("La Cantidad de Varones que tuvieron 6 o mas fueron: "+cantVarones);
        location.reload();
    }

}
