let num1, num2, resultado, operacao

num1 = Number(prompt("Digite o primeiro número"))
num2 = Number(prompt("Digite o segundo número"))
operacao = Number(prompt("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nDigite o número da operação desejada:"))

/*if(operacao == 1){
    Soma()
}else if(operacao == 2){
    Subtracao()
}else if(operacao == 3){
    Mult()
}else if(operacao == 4){
    Div()
}else{
    alert("Operação incorreta")
}*/

switch(operacao){

    case 1:
        Soma()
        break
    case 2:
        Subtracao()
        break
    case 3:
        Mult()
        break
    case 4:
        Div()
        break

    default:
        alert("Operação incorreta")
        break
}

function Soma(){
    resultado = num1 + num2
    alert(`${num1} + ${num2} = ${resultado}`)
}
function Subtracao(){
    resultado = num1 - num2
    alert(`${num1} - ${num2} = ${resultado}`)
}
function Mult(){
    resultado = num1 * num2
    alert(`${num1} x ${num2} = ${resultado}`)
}
function Div(){
    resultado = num1 / num2
    alert(`${num1} / ${num2} = ${resultado}`)
}

