//1) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

let comorbidade,idade,nome

nome = prompt("Qual o nome da pessoa?")
idade = Number(prompt("Qual a idade da pessoa?"))
comorbidade = prompt("A pessoa tem comorbidade?(S/N)")
 
if(idade >= 60 || comorbidade == "S" || comorbidade == "s"){
    alert("Pode vacinar!")
}else if(comorbidade != "n" || comorbidade != "N"){
    alert("Comorbidade inválida")
}else{
    alert("Não pode vacinar!")
}