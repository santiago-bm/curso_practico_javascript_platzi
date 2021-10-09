// Código cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado (lado){
    return lado * 4;

} 
//console.log("El perimetro del cuadrado mide : " + perimetroCuadrado);

function areaCuadrado (lado){
    return lado * lado;
}
//console.log("El área del cuadrado mide: " + areaCuadrado );

console.groupEnd();

// Código Triágulo

console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//const alturaTriangulo = Math.pow(((ladoTriangulo1*ladoTriangulo1)-((baseTriangulo/2)*(baseTriangulo/2))),(1/2));
//console.log("la altura del triangulo mide " + alturaTriangulo)

//console.log("los lados del triángulo miden: "
 //+ ladoTriangulo1
 //+" "
 //+ ladoTriangulo2
 //+" "
 //+ baseTriangulo 
 //);

function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triángulo mide : " + perimetroTriangulo );

function areaTriangulo (lado1,base){
    altura =Math.pow(((lado1*lado1)-((base/2)*(base/2))),(1/2))
    return (base* altura) / 2;
} 
//console.log("El área del triángulo mide: " + areaTriangulo );
console.groupEnd();

// Código Círculo
console.group("Circulo");

const pi = Math.PI;

//const radioCirculo = 4;
//console.log("El radio del círculo es " + radioCirculo);

function diametroCirculo(radio){
    return 2 * radio;
}

function perimetroCirculo (radio){
    diametro = diametroCirculo(radio) 
    return 2 * pi * radio;

}  
//console.log("El perímetro del círculo es " + perimetroCirulo);

function areaCirculo (radio){
    return pi *(radio * radio);
}
//console.log("El área del círculo es " + areaCirculo);
console.groupEnd();

// Aquí se interactua con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    peri.innerHTML= perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const lado1 = parseFloat(input1.value);
    const input2 = document.getElementById("lado2");
    const lado2 = parseFloat(input2.value);
    const input3 = document.getElementById("base");
    const lado3 = parseFloat(input3.value);
    const perimetroT = perimetroTriangulo(lado1,lado2,lado3);
    alert(perimetroT);
}

function calcularAlturaIsosceles(l1,l2,l3)
{
    if (l1 == l2)
    {
        altura =Math.pow(((l1*l1)-((l3/2)*(l3/2))),(1/2))
        console.log(altura);
    }
    else
    {
        console.log("lado1 no es igual a lado2")
    }
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("lado1");
    const lado1 = parseFloat(input1.value);
    const input2 = document.getElementById("lado2");
    const lado2 = parseFloat(input2.value);
    const input3 = document.getElementById("base");
    const lado3 = parseFloat(input3.value);
    if (lado1 === lado2) {
        let areaT = areaTriangulo(lado1,lado3);
    alert (areaT); 
    }
    else
        alert("lado1 no es igual a lado2")
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const value = parseFloat(input.value);
    
    const perimetroC = perimetroCirculo(value);
    alert(perimetroC);
}

function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const value = parseFloat(input.value);
    
    const areaC = areaCirculo(value);
    alert(areaC);
}

