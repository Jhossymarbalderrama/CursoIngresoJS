/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
  var num1suma;
  var num2suma;
  var resultadosuma;

  num1suma = document.getElementById("numeroUno").value;
  num2suma = document.getElementById("numeroDos").value;

  num1suma = parseInt(num1suma);
  num2suma = parseInt(num2suma);

  resultadosuma = num1suma + num2suma;

 alert("Su resultado es: " + resultadosuma);

}

function restar()
{
  var num1resta;
  var num2resta;
  var resultadoresta;

  num1resta = document.getElementById("numeroUno").value;
  num2resta = document.getElementById("numeroDos").value;

  num1resta = parseInt(num1resta);
  num2resta = parseInt(num2resta);

  resultadoresta = num1resta - num2resta;

 alert("Su resultado es: " + resultadoresta);

}

function multiplicar()
{

  var num1multiplicacion;
  var num2multiplicacion;
  var resultadomultiplicacion;

  num1multiplicacion = document.getElementById("numeroUno").value;
  num2multiplicacion = document.getElementById("numeroDos").value;

  num1multiplicacion = parseInt(num1multiplicacion);
  num2multiplicacion = parseInt(num2multiplicacion);

  resultadomultiplicacion = num1multiplicacion * num2multiplicacion;

 alert("Su resultado es: " + resultadomultiplicacion);

}

function dividir()
{
  var num1divisor;
  var num2divisor;
  var resultadodivisor;

  num1divisor = document.getElementById("numeroUno").value;
  num2divisor = document.getElementById("numeroDos").value;

  num1divisor = parseInt(num1divisor);
  num2divisor = parseInt(num2divisor);

  resultadodivisor = num1divisor / num2divisor;

 alert("Su resultado es: " + resultadodivisor);


}

