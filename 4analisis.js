
// Helpers

function esPar(variable){
    return (variable % 2 === 0);
}

function calcularPromedioArray(lista){
    let sumaLista = lista.reduce( (a , b) => a + b);
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Mediana General

let salariosCol = colombia.map(objetos => objetos.salary);
let salariosColSorted = salariosCol.sort((salaryA,salaryB)=> salaryA - salaryB);

// Calculadora de Mediana 

function medianaSalarios(lista){
    let mitad = parseInt(lista.length/2);

    if((esPar(lista.length))){
        let variableMitad1 = lista[mitad-1];
        let variableMitad2 = lista[mitad];
        let promedioMitad = calcularPromedioArray([variableMitad1 , variableMitad2]);
        return promedioMitad;
    }
    else{
        let variableMitad = lista[mitad];
        return variableMitad;
    }
}

let medianaGeneralSalariosCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

let spliceStart = (salariosColSorted.length * 90) / 100;
let spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

let medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralSalariosCol,
    medianaTop10Col,
    salariosColSorted
});

