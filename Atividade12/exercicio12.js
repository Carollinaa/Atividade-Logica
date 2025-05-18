// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));


console.log("Tabuada do " + numero + " em Adição:");
for (let n = 1; n <= 10; n++) {
    let soma = numero + n;
    console.log(numero + " + " + n + " = " + soma);
}

console.log("\nTabuada do " + numero + " em Subtração:");
for (let n = 1; n <= 10; n++) {
    let subtracao = numero - n;
    console.log(numero + " - " + n + " = " + subtracao);
}

console.log("\nTabuada do " + numero + " em Multiplicação:");
for (let n = 1; n <= 10; n++) {
    let multiplicacao = numero * n;
    console.log(numero + " * " + n + " = " + multiplicacao);
}

console.log("\nTabuada do " + numero + " em Divisão:");
for (let n = 1; n <= 10; n++) {
    let divisao = numero / n;
    console.log(numero + " % " + n + " = " + divisao.toFixed(1));
}