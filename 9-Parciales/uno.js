// Enunciado:
// Bienvenidos. 
// Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
var ancho;
var largo;
var perimetro;

function mostrar(){
    ancho = prompt("Ingrese el Ancho del Algoritmo","Ingrese aquí");//B Base
    largo = prompt("Ingrese el Largo del Algoritmo","Ingrese aquí");//H Altura

    ancho = parseInt(ancho);
    largo = parseInt(largo);
    perimetro = 2 * (ancho + largo);

    alert("El perimetro de su Rectángulo es de: "+perimetro+"m .")
}