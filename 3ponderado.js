let notes = [];

function ingresarObjeto(){

    let objeto = {}
    let inputNote = document.getElementById("Nota");
    let nota = parseFloat(inputNote.value);
    let inputCredit = document.getElementById("Credito");
    let credito = parseFloat(inputCredit.value);
    let mostrarNotas = document.getElementById("Listado");

    objeto.note = nota;
    objeto.credit = credito;
    notes.push(objeto);
    
    mostrarNotas.innerHTML = notes.map((objeto) => "|| Note :" + " , " + objeto.note + " Credit : " + objeto.credit + "||");
}

function calcularPonderado (notes) {

    let showPonderado = document.getElementById("Ponderado")

    /*con la funtcion multiplicar se accede al elemento
    del obejto y se multiplican, con map se le aplica a 
    cada elemento de la matriz */

    function multiplicar(objetoMatriz){
        return objetoMatriz.note * objetoMatriz.credit;
    }

    let notePorCredit = notes.map(multiplicar);
    console.log(notePorCredit)


    let sumOfnotePorCredit = notePorCredit.reduce((a,b) =>  a + b);

    /*se accede a cada elemento credits de cada objeto de
    la matriz y genera una nueva matriz con map */ 

    let allCredits = notes.map((objeto) => objeto.credit);

    let sumOfAllCredits = allCredits.reduce((a,b) => a + b);

    let ponderado = sumOfnotePorCredit / sumOfAllCredits;

    showPonderado.innerText = "El ponderado es: " + ponderado;

}

