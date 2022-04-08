//2) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"

let num,resto

num = Number(prompt("Digite um número:"))

resto = num % 2

if(resto == 0){
    alert(`${num} é número par`)
}
else{
    alert(`${num} é número ímpar`)
}