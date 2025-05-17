// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

soma = 0

for (let n = 0; n < 5; n++) {
    let numero = Number(prompt("Informe um número: "))
    soma += numero

}
console.log("a soma de todos os números é "+ soma)