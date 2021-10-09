let lista= [];
function agregarVector(){
    let inputValue = document.getElementById("ListElements");
    let indice =parseFloat(inputValue.value);
    let mostrar = document.getElementById("Array")

    lista.push(indice);
    
    mostrar.innerText = "[ " + lista + " ]";
    
}


function calcularModa(){
    let listado = lista;
    let objetoContador = {};
    let mostrarModa = document.getElementById("Moda");

// Recorrer lista con map y organizarla en el objeto Objeto contador

    function contador(elemento){
        if (objetoContador[elemento]) {
            objetoContador[elemento] += 1;
        }
        else{
            objetoContador[elemento] = 1;
        }
        }
listado.map(contador); 

//Crear un nuevo array del objetoContador 

let arrayObjecto = Object.entries(objetoContador)

//Organiza el array segun la posicion del segundo elemento del array dentro del array

let arrayOrdenado =arrayObjecto.sort((a,b) => a[1] - b[1])

let moda = arrayOrdenado[(arrayOrdenado.length - 1)];

mostrarModa.innerText = "la moda es: " + moda[0] + " y se repite " + moda[1] + " veces";
}