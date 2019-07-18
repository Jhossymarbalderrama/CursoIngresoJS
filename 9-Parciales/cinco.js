var nombrePlaneta;

function mostrar()
{
    nombrePlaneta = prompt("Ingrese el Nombre de un Planeta del Sis.Solar","Ingrese aquí");
    nombrePlaneta = nombrePlaneta.toLowerCase()

    switch(nombrePlaneta){
            case "mercurio":
            case "venus":
                    alert("Acá hace mas calor");
                    break;
            case "tierra":
                    alert("Acá vivimos");
                    break;
            case "marte":
            case "supiter":
            case "saturno":
            case "urano":
            case "neptuno":     
                    alert("Acá hace mas frio");   
                    break;
            default:
                    alert("No es un planeta valido");
                    break;
    }
}
