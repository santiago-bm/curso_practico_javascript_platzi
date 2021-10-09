let list= [];

function agregarVector(){
    let inputValue = document.getElementById("ListElements");
    let indice =parseFloat(inputValue.value);
    let mostrar = document.getElementById("Array")

    list.push(indice);
    
    mostrar.innerText = "[ " + list + " ]";
    
}


function calcularMediana(){
    let lista = list;
    let mostrarArray = document.getElementById("Mediana")

    let listaOrdenada = lista.sort(compare);
    const mitad = lista.length / 2;
  

    if (lista.length % 2 === 0) {
        let mediana = (listaOrdenada[mitad - 1] + listaOrdenada[mitad])/2
        mostrarArray.innerText = mediana;
    }
    else {
        let posicion = (listaOrdenada[Math.floor(mitad)])
        mostrarArray.innerText = posicion;
    }
    }

    function compare (a,b){
        return a - b;
}

