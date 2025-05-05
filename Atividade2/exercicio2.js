// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade, Humano:  "))

if (!isNaN(idade)) {
    if (idade < 0) {
        console.log("Você não existe")
    }else if (idade <= 12) {
        console.log("Você é uma criança")
    }else if(idade <= 17){
        console.log("você é adolescente")
    }else if(idade <= 64 ){
        console.log("Você é adulto")
    }else{
        console.log("Você é idoso")
    }
}else{
    console.log("Informe um valor válido (Número)")
}