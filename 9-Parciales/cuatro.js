var num1;
var num2;
var resultado;

function mostrar()
{
    num1 = prompt("Ingrese el primer Numero","Ingrese aquí");
    num2 = prompt("Ingrese el segundo Numero","Ingrese aquí");

    if(num1==num2){
        alert(num1+" y "+num2);
    }else if(num1>num2){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 - num2 ;

        alert("Su resultado restado es: "+ resultado);
    }else if(num1<num2){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        resultado = num1 + num2 ;

        alert("Su resultado sumado es: "+ resultado);      
    }

    if(resultado>10){
        alert("La suma es de "+resultado+" y supero el 10");
    }
}
