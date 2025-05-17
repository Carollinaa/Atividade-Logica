// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro: "));

console.log()
for (let n = 1; n <= 10; n++) {

    console.log("Repetição " + n +" - "+ numero);
}