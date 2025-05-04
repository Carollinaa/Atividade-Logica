//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let num = Number(prompt("Escolha um valor númerico:  "))

if (!isNaN(num)) {
    if (num % 2 === 0) {
        console.log("Número par")
    }else{
        console.log("Número impar")
    }
}else{
    console.log("Este valor não é válido")
}