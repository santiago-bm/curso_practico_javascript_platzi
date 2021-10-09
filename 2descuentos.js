let cupones = [
    {
        cupon:"Diez",
        descuento: 10,

    },
    {
        cupon:"Quince",
        descuento: 15,

    },
    {
        cupon:"Treinta",
        descuento: 30,

    }
];

function calcularDescuento () {
   
    let inputPrice = document.getElementById("InputPrice");
    const precio = inputPrice.value;

    let inputDiscount = document.getElementById("InputDiscount");
    const valorCupon = inputDiscount.value;

    let resultado = document.getElementById("Resultado");

    let descuento;
   
    let esValidoElCupon = function(cupones){
        return cupones.cupon === valorCupon;
    };
    
    let cuponDelUsuario = cupones.find(esValidoElCupon);
    console.log(esValidoElCupon);
    
    if (!cuponDelUsuario){
        resultado.innerText = "El cupon "+ valorCupon + " no es válido";
    }
    else{
        descuento = cuponDelUsuario.descuento;
        console.log(cuponDelUsuario);
        let descuentoDelPrecio = (precio * descuento) / 100;
    let precioFinal = precio -descuentoDelPrecio;
    
    resultado.innerText = "El descuento es: " + descuento +"% "+ "su nuevo percio es: $" + precioFinal;
    }


    
}

