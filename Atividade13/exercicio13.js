// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

let numeros = (prompt("Informe alguns números decimais separados por vírgula: "));
let n = numeros.split(',')  // transforma em array

console.log(n)

let aMedia = Number(prompt("Digite 0 para obter a média aritmética destes números: "))

if (aMedia === 0) {
    let soma = 0
    for (let i = 0; i < n.length; i++) {
        soma += parseFloat(n[i])
    }
    let media = 0
    media = soma / n.length
    console.log("A média é = " + media)
} else {
    console.log("Para acessar a média é necessário Digitar o número 0")
}

