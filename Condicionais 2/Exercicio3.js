//3) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).

let peso,altura,imc

peso = Number(prompt("Digite o peso da pessoa"))
altura = Number(prompt("Digite a altura da pessoa"))

imc = (peso/(altura*altura)).toFixed(1)

//Abaixo de 18,5 - Abaixo do peso\nEntre 18,5 e 24,9 - Peso normal\nEntre 25 e 29,9 - Sobrepeso\nEntre 30 e 34,9 - Obesidade Grau I\nEntre 35 e 39,9 - Obesidade grau II\nMaior ou igual a 40 - Obesidade Grau III ou Mórbida`

alert(`Seu IMC é ${imc}`) 

if(imc < 18.5){
    alert("Abaixo do peso")
}else if(imc >= 18.5 && imc <= 24.9){
    alert("Dentro do peso ideal")
}else if(imc >= 25 && imc <= 29.9){
    alert("Está com sobrepeso")
}else if(imc >= 30 && imc <= 34.9){
    alert("Está com obesidade grau I")
}else if(imc >= 35 && imc <= 39.9){
    alert("Está com obesidade grau II")
}else{
    alert("Está com obesidade grau III")
}
