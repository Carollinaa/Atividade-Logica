//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let macas = Number(prompt("Informe quantas maçãs você deseja: "))

// Verificando a quantidade e definindo o valor unitário
let valorMacas = (macas < 12) ? 0.30 : 0.25

// Calculando o valor total
let total = macas * valorMacas

console.log("O valor total da sua compra é: R$ " + total.toFixed(2))