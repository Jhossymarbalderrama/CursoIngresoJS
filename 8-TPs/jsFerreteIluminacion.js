/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var cantidad;
var marca;
var preciocantidad;
var descuento;
var total;
var ingresosbrutos; 

function CalcularPrecio () 
{
    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;

    preciocantidad = parseInt(preciocantidad);
    descuento = parseInt(descuento);
    cantidad = parseInt(cantidad);
    total = parseInt(total);
    ingresosbrutos = parseInt(ingresosbrutos);

    preciocantidad = 35 * cantidad;

    // A-
    if(cantidad>=6){ 
        //preciocantidad = parseInt(preciocantidad);
        //descuento = parseInt(descuento);
        descuento = 50 * preciocantidad ;
        descuento =  descuento / 100;

    }

    // B-
    if(cantidad==5 && marca=="ArgentinaLuz"){
        //preciocantidad = parseInt(preciocantidad);
        //descuento = parseInt(descuento);
        descuento = 40 * preciocantidad ;     
        descuento =  descuento / 100;

    }else if(cantidad==5 && marca!="ArgentinaLuz"){
        //preciocantidad = parseInt(preciocantidad);
        //descuento = parseInt(descuento);
        descuento = 30 * preciocantidad ;     
        descuento =  descuento / 100;
    }

    // C-
    if(cantidad==4){
        if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
            //preciocantidad = parseInt(preciocantidad);
            //descuento = parseInt(descuento);
            descuento = 25 * preciocantidad ;
            descuento =  descuento / 100;

            //alert("Entro como cantidad 4 y marca Arg o Felipe 25%")
        }else if(!(marca=="ArgentinaLuz" || marca=="FelipeLamparas")){
            //preciocantidad = parseInt(preciocantidad);
            //descuento = parseInt(descuento);
            descuento = 20 * preciocantidad ;
            descuento =  descuento / 100;

            //alert("Entro como cantidad 4 y otras marcar 20%")
        }
    }

    // D-
    if(cantidad==3){
        if(marca=="ArgentinaLuz"){
            //preciocantidad = parseInt(preciocantidad);
            //descuento = parseInt(descuento);
            descuento = 15 * preciocantidad ;
            descuento =  descuento / 100;

            //alert("cantidad 3 marcar argentinaluz 15%");
        }else if(marca=="FelipeLamparas"){
            //preciocantidad = parseInt(preciocantidad);
            //descuento = parseInt(descuento);
            descuento = 10 * preciocantidad ;
            descuento =  descuento / 100;

            //alert("cantidad 3 marcar felipelamparas 10%");
        }else{
            //preciocantidad = parseInt(preciocantidad);
            //descuento = parseInt(descuento);
            descuento = 5 * preciocantidad ;
            descuento =  descuento / 100;  
            
           //alert("cantidad 3 otras marcas 5%");
        }

    }

    if(cantidad<3){
        total = preciocantidad
    }else{
        total = preciocantidad + descuento ; //Se suma el precio total + descuento
    }
    

    // E-
    if(total>120){  
        ingresosbrutos = total / 1.10;
        ingresosbrutos = ingresosbrutos * 0.10;

        total = total + ingresosbrutos; //Total + 10 % de ingresos brutos
        
        //alert("sus 10% de ingresos brutos es de "+ingresosbrutos);
        //alert("IIBB Usted pago un total de "+total);
    }


    document.getElementById("precioDescuento").value = total; 
    
}
