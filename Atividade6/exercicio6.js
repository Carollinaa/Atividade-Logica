//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()

console.log("Que tal construirmos um triângulo \n")
let A = Number(prompt("Informe o lado A do triângulo: "))
let B = Number(prompt("Informe o lado B do triângulo: "))
let C = Number(prompt("Informe o lado C do triângulo: "))

if ((A < B + C) && (B < A + C) && (C < A + B)) {
    console.log("Temos aqui um triângulo ")

    if ((A !== B) && (B !== C)) {
        console.log("Escaleno")
    }else if((A === B) && (B ===C)){
        console.log("Equilátero")
    }else if((A === B) || (A === C) || (B === C)){
        console.log("Isósceles")
    }
}else{
    console.log("Não foi possível formar um triângulo...")
}