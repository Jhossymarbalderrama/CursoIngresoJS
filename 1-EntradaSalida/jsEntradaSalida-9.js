/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var sueldo;
var resultado;
var porcentaje;

function mostrarAumento()
{
  sueldo = document.getElementById("sueldo").value;
  sueldo = parseInt(sueldo);
  porcentaje = sueldo * 0.1;
  porcentaje = parseInt(porcentaje);

  resultado = sueldo + porcentaje;

  document.getElementById("resultado").value = resultado ;

}
