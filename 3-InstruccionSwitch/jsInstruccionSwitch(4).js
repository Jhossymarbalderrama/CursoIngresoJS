function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
mesDelAño = mesDelAño.toLowerCase()
//alert (mesDelAño);
	switch(mesDelAño){
    case "febrero":
        alert("Tiene 28 Dias");
        break;
    case "enero" :
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Septiembre" :
    case "Noviembre":
        alert("Tiene 31 Dias");
        break;
    default :
        alert("Tiene 30 Dias");
        break;
  }
}//FIN DE LA FUNCIÓN
