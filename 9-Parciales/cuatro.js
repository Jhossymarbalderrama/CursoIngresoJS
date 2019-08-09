// Enunciado:
// Bienvenidos (IF). 
// Pedir dos números y mostrar el resultado: 
// Si son iguales los muestro concatenados. 
// Si el primero es mayor, los resto, 
// de lo contrario los sumo. 
// Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
// "la suma es xxx y supero el 10".
var valor1;
var valor2;
var resultado;

function mostrar()
{
    valor1 = prompt("Ingrese un valor numerico","aquí");
    valor2 = prompt("Ingrese un segundo valor numerico","aquí");


    if(valor1 == valor2){
        resultado = valor1+valor2;
        alert("Resultado = "+resultado);
    }else{
        valor1 = parseInt(valor1);
        valor2 = parseInt(valor2);
    
        if(valor1>valor2){
            resultado = valor1 - valor2;
            alert("Resultado = "+resultado);
            
        }else{
            resultado = valor1 + valor2;
    
            if(resultado>10){
                alert("La suma es "+resultado+" y supero el 10");
            }else{
                alert("Resultado = "+resultado);
            }
        }
    }
    
}
