var ancho;
var largo;
var perimetro;

function mostrar()
{
  largo = prompt("Calculador de Perimetro","Ingrese aquí el Largo");
  ancho = prompt("Calculador de Perimetro","Ingrese aquí el Ancho");

  largo = parseInt(largo);
  ancho = parseInt(ancho);

  perimetro =  largo + ancho;

  perimetro = parseInt(perimetro);
  perimetro = 2 * perimetro;

  alert("Resultado del Perimetro "+ perimetro );

}
