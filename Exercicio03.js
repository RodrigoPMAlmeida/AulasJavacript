//Faça um programa onde o usuário deve digitar a temperatura em graus Celsius e mostrar na tela essa temperatura convertida em Fahrenheit.
let celsius,fahrenheit

celsius = Number(prompt("Digite a temperatura em graus Celsius:"))

fahrenheit = (celsius * 1.8) + 32

alert(`${celsius} C° = ${fahrenheit} Fahrenheit`)