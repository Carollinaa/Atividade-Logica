//Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let fib1 = 0
let fib2 = 1

console.log("\nPrimeiros 10 números da sequencia de Fibonacci: ")

for (let i = 0; i <= 10 ; i++) {
    console.log(fib1)              // mostar valor atual de fib1

    let somaProximo = fib1 + fib2 // soma os dois últimos numeros
    fib1 = fib2                   // atualiza o valor de fib1
    fib2 = somaProximo            // atualiza o valor de fib2
}