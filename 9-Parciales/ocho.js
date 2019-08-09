// Enunciado:
// Bienvenidos. 
// Realizar el algoritmo que permita el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso 
// por document.write: 

// a) La cantidad de números pares. 
// b) La cantidad de números impares. 
// c) La cantidad de ceros. 
// d) El promedio de todos los números positivos ingresados. 
// e) La suma de todos los números negativos. 
// f) El número y la letra del máximo y el mínimo. (supongo que, maximo y minimo Por valor Numerico) JB

// Testeo con los siguientes datos 
// ( d , -150(mal) , -50(bien)) 
// ( z , 0) 
// ( g , 20) 
// ( a , 150(mal) , 0(bien)) 
// ( b , 3) 
// ( k , 7)

var letra; //letra
var numero=0; //-100 a 100 (validar)

var esPar=0 ; //A
var canNumerosPares=0;//A
// var esImpar=0;
var canNumerosImpares=0;//B
var canCeros=0;//C
var sumaTotalPositivos=0;//D
var canNumerosPositivos=0;//D
var promedioPositivos;//D
var sumaTotalNegativos=0;//E

var primeraVez = true; //F
var letraMax;
var letraMin;
var numeroMax;//F
var numeroMin;//F

function mostrar()
{
    while(confirm("Desea Ingresar..")){
        letra = prompt("Ingrese una Letra");
        
        numero = prompt("Ingrese un Numero");
        while(numero>100 || numero<-100){
            alert("Error, Ingrese Nuevamente el Valor Numerico (Rango: -100 a 100)");
            numero = prompt("Ingrese un Numero");    

        }
        //F  Primera Vez Asigno Maximo y Minimo
        if(primeraVez){
            primeraVez = false;

            numeroMin = numero;
            numeroMax = numero;
        }else{
            //F -Numero y Letra del Maximo y Minimo-
            if(numero < numeroMin){
                //Obtengo el Minimo (Letra y Numero)
                letraMin = letra;
                numeroMin = numero;
            }else{
                //Obtengo el Maximo (Letra y Numero)
                letraMax = letra;
                numeroMax = numero;
            }

        }

        //C - Cantidad de Ceros -
        if(numero == 0){
            canCeros += 1;        
        }
        //A - Cantidad Numeros Pares -
        esPar = numero;

        if(esPar % 2 == 0){
            canNumerosPares += 1;
        }else{  //B - Cantidad Numeros Impares -
            canNumerosImpares += 1;
        }

        if(numero>=0){ //D Saca la suma total de Positivos y la Cantidad (para hacer el Promedio)
            canNumerosPositivos +=1;
            sumaTotalPositivos = parseInt(sumaTotalPositivos);
    
            sumaTotalPositivos = sumaTotalPositivos + numero;

        }else{ 
            // E -Suma Total Negativos-
            sumaTotalNegativos = parseInt(sumaTotalNegativos);

            sumaTotalNegativos = sumaTotalNegativos - numero;
        }
    }
    //D - Si termino de Ingresar saco el Promedio -
    if(sumaTotalPositivos>=0){ 
        promedioPositivos = sumaTotalPositivos / canNumerosPositivos;
    }
    

    document.write("La cantidad de números pares: "+canNumerosPares+"<br>");//A
    document.write("La cantidad de números impares: "+canNumerosImpares+"<br>");//B
    document.write("La cantidad de ceros: "+canCeros+"<br>");//C
    document.write("El promedio de todos los números positivos ingresados: "+promedioPositivos+"<br>");//D
    document.write("La suma de todos los números negativos: "+sumaTotalNegativos+"<br>");//E
    document.write("El número y la letra del máximo y el mínimo es: Maximo = "+numeroMax+" Letra = "+letraMax+" Minimo = "+numeroMin+" Letra = "+letraMin+"<br>");//F

// a) La cantidad de números pares. 
// b) La cantidad de números impares. 
// c) La cantidad de ceros. 
// d) El promedio de todos los números positivos ingresados. 
// e) La suma de todos los números negativos. 
// f) El número y la letra del máximo y el mínimo. (supongo que, maximo y minimo Por valor Numerico) JB

}
