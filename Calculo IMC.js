let peso,altura,imc

peso = Number(prompt("Digite o peso da pessoa"))
altura = Number(prompt("Digite a altura da pessoa"))

imc = (peso/(altura*altura)).toFixed(3)

alert(`Seu IMC é ${imc}\n\nAbaixo de 18,5 - Abaixo do peso\nEntre 18,5 e 24,9 - Peso normal\nEntre 25 e 29,9 - Sobrepeso\nEntre 30 e 34,9 - Obesidade Grau I\nEntre 35 e 39,9 - Obesidade grau II\nMaior ou igual a 40 - Obesidade Grau III ou Mórbida`)