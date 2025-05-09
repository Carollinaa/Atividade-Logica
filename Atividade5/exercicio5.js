// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()


let peso = Number(prompt("Informe seu peso: "))
let altura = Number(prompt("Informe sua Altura: "))

let alturaQuadrado = altura * altura
let imc = peso / alturaQuadrado

console.log("IMC:", imc.toFixed(2));

if (imc > 0 && imc < 18.5) {
    console.log("Você está abaixo do peso")
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Você está com o peso normal")
} else if (imc < 29.9) {
    console.log("Você está com sobrepeso")
} else {
    console.log("você está com obesidade")
}