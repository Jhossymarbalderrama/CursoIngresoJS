var hora;
var tiempo;

function mostrar()
{
    hora = document.getElementById("laHora").value;

    switch(hora){
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            alert("Son las "+hora+", es de Mañana.");
            break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":                                    
        case "17":
        case "18":
        case "19":
            alert("Son las "+hora+", es de tarde.");
            break;
        case "20":
        case "21": 
        case "22":      
        case "23":      
        case "24":      
        case "1":
        case "2":      
        case "3":             
        case "4":              
        case "5":    
            tiempo = "Noche"
            alert("Son las "+hora+", es de noche.");
            break;        
        default:
            alert("Hora no valida.");
            break;    
    }

    if(tiempo=="Noche" && hora<24){
        alert("A dormir");
    }
}
