let list= [];

function agregarVector(){
    let inputValue = document.getElementById("ListElements");
    let indice =parseFloat(inputValue.value);
    let mostrar = document.getElementById("Array")

    list.push(indice);
    
    mostrar.innerText = "[ " + list + " ]";
    
}


 function calcularPromedio(){
     let mostrarLista = document.getElementById("Promedio");
     let lista = list;

    function sumar (a,b){
        return a+b;
    }
    const sumarLista = lista.reduce(sumar);

   
     let promedioLista = sumarLista / lista.length;
     
     mostrarLista.innerText = promedioLista;
 }