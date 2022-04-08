let nome, idade

nome = prompt("Digite um nome")
idade = Number(prompt("Digite uma idade"))

switch(false){
    
    case (nome == "Rodrigo" && idade > 18):
        alert("Maior que 18")
        break;
    case (nome == "Rodrigo" && idade < 18):
        alert("Menor que 18")
        break;
    case (nome == "Rodrigo" && idade == 18):
        alert("Igual a 18")
        break;
    default:
        alert("Errou")
         
}