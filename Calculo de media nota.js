let Barcelona, realMadrid, atleticoDeMadrid,media

Barcelona = Number(prompt("Digite a nota da atividade individual: "))
realMadrid = Number(prompt("Digite a nota do seminário em grupo: "))
atleticoDeMadrid = Number(prompt("Digite a nota do projeto final: "))

media = (Barcelona + realMadrid + (3*atleticoDeMadrid))/5

alert(`Nota da atividade individual: ${Barcelona}\nNota do seminário em grupo: ${realMadrid}\nNota do projeto final: ${atleticoDeMadrid}\nMédia das notas: ${media}`)