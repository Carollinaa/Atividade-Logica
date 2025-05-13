# Construção de Triângulo

Este projeto consiste em um programa que verifica se três lados informados podem formar um triângulo e, caso positivo, determina o tipo do triângulo (Escaleno, Isósceles ou Equilátero).

## 💡 Funcionalidades

O programa solicita ao usuário que informe três valores numéricos correspondentes aos lados do triângulo. Após isso verifica se os valores informados atendem às condições para formar um triângulo:

 A soma de dois lados deve ser sempre maior que o terceiro lado.

Caso seja possível formar um triângulo, o programa identifica seu tipo:

* Equilátero: Todos os lados são iguais.

* Isósceles: Dois lados são iguais.

* Escaleno: Todos os lados são diferentes.

Se não for possível formar um triângulo, o programa informa ao usuário.

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **prompt-sync** para entrada de dados

## 💻 Como Executar

Certifique-se de ter o Node.js instalado em sua máquina.

Instale a biblioteca prompt-sync :

    npm install prompt-sync

## ✨ Exemplo de Uso

    Informe o lado A do triângulo: 3
    Informe o lado B do triângulo: 4
    Informe o lado C do triângulo: 5
    Temos aqui um triângulo
    Escaleno
