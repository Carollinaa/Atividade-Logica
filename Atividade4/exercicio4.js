// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

"use strict"

const prompt = require('prompt-sync')()

function escolhaOpcoes() {
    while (true) {
        console.log("1- Mostrar frutas")
        console.log("2- Escolher minha fruta preferida")
        console.log("3- sair")
        let opcoes = Number(prompt("Escolha uma opção:  "))

        switch (opcoes) {
            case 1:
                exibirMenu()
                break;
            case 2:
                frutaPreferida()
                break;
            case 3:
                sair()
                break;

            default:
                console.log("Opção inválida. Por favor, escolha 1, 2 ou 3")

        }
    }
}

function exibirMenu() {
    console.clear();
    console.log("0- Banana  | 4- Maçã    | 8- Laranja   | 12- Manga  | 16- Mamão")
    console.log("1- Abacaxi | 5- Melancia| 9- Melão     | 13- Uva    | 17- Limão")
    console.log("2- Maracujá| 6- Coco    | 10- Acerola  | 14- Caju   | 18- Goiaba")
    console.log("3- Pera    | 7- Abacate | 11- Tangerina| 15- Pitanga| 19- Jabuticaba\n")
}


function frutaPreferida() {
    console.clear();
    exibirMenu()

    let fruta = (prompt("Escolha sua fruta preferida do momento:  "))
    console.log("Então sua fruta preferida é " + fruta + " ? Muito boa mesma")
}

function sair() {
    console.clear();
    escolhaOpcoes()
}
escolhaOpcoes()