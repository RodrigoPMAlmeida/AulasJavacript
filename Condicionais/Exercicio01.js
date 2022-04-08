let nota1, nota2, nota3, nota4, media

nota1 = Number(prompt("Digite a nota da primeira prova:"))
nota2 = Number(prompt("Digite a nota da segunda prova:"))
nota3 = Number(prompt("Digite a nota da terceira prova:"))
nota4 = Number(prompt("Digite a nota da quarta prova:"))

media = (nota1 + nota2 + nota3 + nota4)/4

alert(`Média: ${media}`)

if(media >= 7){
    alert("Ta sabendo legal. Aprovado!")
}
else if(media >= 5 && media < 7){
    alert("Poxa campeão. Ficou de recuperação")
}
else{
    alert("Mas é um jumento. Reprovado")
}