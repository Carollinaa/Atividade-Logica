//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let p1 = Number(prompt("informe um número: "));
let p2 = Number(prompt("informe outro número: "));

// Vê se os números são iguais
while (p1 === p2) {
    console.log("Os números não podem ser iguais. Tente novamente.");
    p2 = Number(prompt("Digite um número diferente do primeiro informado: "));
}
// Ordena em crescente
if (p1 > p2) {
    [p1, p2] = [p2, p1]
}

console.log("Números em ordem crescente: "+ p1 + " | "+ p2);

