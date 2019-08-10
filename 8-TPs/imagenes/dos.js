// Debemos realizar la carga de cuatro mascotas de una veterinaria, 
// de cada una debo optener los siguientes datos: 
// el tipo (validar "perro" o "gato") , 
// la edad (validar entre 1 y 25),
// el peso (validar entre 1 y 100) 
// y el nombre. 
// Se debe Informar al usuario lo siguiente: 
// a) El promedio de los pesos totales. 
// b) El nombre del perro mas viejo 
// c) La cantidad animales menores a 10 kilos de mas de 10 años.

var nombre;
var peso;
var tipo;
var edad;
var contador=0;
//A
var pesoAcumulador=0;
var promedio;
//B
// var nombreViejo;
// var edadViejo=0;
var maxEdad=0;
var maxNombre;
var huboPerro=false;
//C
var contadorPesoAños=0;

function mostrar()
{
  while(contador<4){
    do{
      tipo = prompt("ingrese el tipo entre gato o perro");
      tipo = tipo.toLowerCase(tipo);
    }while(tipo != "perro" && tipo != "gato") // Validaciones

    do{
      edad = prompt("Ingrese la edad entre 1 y 25");
    }while(isNaN(edad) || edad < 1 || edad > 25);// Validaciones


    do{
      peso = prompt("Ingrese un peso entre 1 y 100");
    }while(isNaN(peso) || peso < 1 || peso > 100);// Validaciones
    
    nombre = prompt("Ingrese el nombre");

    //A
    peso = parseInt(peso);
    pesoAcumulador += peso; //Suma Acumulador Peso
    // Fin A

    //B
    edad = parseInt(edad);
    //Ami manera JB
    // if(tipo == "perro" && edadViejo < edad ){
    //   edadViejo = edad;
    //   nombreViejo = nombre;
    // }

    //Como deberia Bandera del Maxi minimo
    if(tipo == "perro" && huboPerro == false){
        maxEdad = edad ;
        maxNombre = nombre;
        huboPerro = true;
    }
    if(tipo == "perro" && edad > maxEdad){
      maxEdad = edad;
      maxNombre = nombre;
    }

    //Fin B

    //C
    if(peso < 10 && edad > 10){
      contadorPesoAños += 1;
    }
    //Fin C

    contador +=1;
  }

  promedio = pesoAcumulador / 4; // Sacar Promedio

  document.write("El Promedio de los pesos totales: "+promedio+"<br>");
  // document.write("El Nombre del Perro mas Viejo: "+nombreViejo+" ("+edadViejo+" Años)"+"<br>");
  document.write("El Nombre del Perro mas Viejo: "+maxNombre+" ("+maxEdad+" Años)"+"<br>");
  document.write("La cantidad animales menores a 10 kilos de mas de 10 años: "+contadorPesoAños+"<br>");
}
