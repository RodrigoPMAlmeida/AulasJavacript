//4) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.

let idade1,idade2,idade3,idade4,idade5
let nome1,nome2,nome3,nome4,nome5
let nomeVelho,maiorIdade,mediaIdade

nome1 = prompt("Digite o nome 1")
idade1 = Number(prompt("Digite a idade 1"))
nome2 = prompt("Digite o nome 2")
idade2 = Number(prompt("Digite a idade 2"))
nome3 = prompt("Digite o nome 3")
idade3 = Number(prompt("Digite a idade 3"))
nome4 = prompt("Digite o nome 4")
idade4 = Number(prompt("Digite a idade 4"))
nome5 = prompt("Digite o nome 5")
idade5 = Number(prompt("Digite a idade 5"))

mediaIdade = (idade1 + idade2 + idade3 + idade4 + idade5)/5

maiorIdade = idade1
nomeVelho = nome1
if(idade2 > maiorIdade){
    maiorIdade = idade2
    nomeVelho = nome2
}if(idade3 > maiorIdade){
    maiorIdade = idade3
    nomeVelho = nome3
}if(idade4 > maiorIdade){
    maiorIdade = idade4
    nomeVelho = nome4
}if(idade5 > maiorIdade){
    maiorIdade = idade5
    nomeVelho = nome5
}
alert(`Média de idade ${mediaIdade}\nMais velho: ${nomeVelho}, ${maiorIdade} anos`)