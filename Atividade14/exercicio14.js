//Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

const prompt = require('prompt-sync')();
console.log("\naqui você calcula o fatorial de...")
let numeros = Number((prompt("Informe um número: ")));

fat = 1
for (let i = 1; i <= numeros; i++) {
    fat *= i    // fat recebe fat * i
}
console.log("O fatorial de " + numeros + " é: " + fat);

// !5
// 5*4*3*2*1