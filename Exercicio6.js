/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente
B) Falar com o RH
C) Falar com o gerente           
D) Sair

Mostrar mensagens para cada opção!*/ 
let opcao,voltar

inicio()

function inicio(){

    opcao = prompt(`Selecione uma das seguintes opções:\n
A) Falar com a atendente
B) Falar com o RH
C) Falar com o gerente
D) Sair`).toUpperCase()


    switch(opcao){
        case 'A':
            voltar = prompt("Encaminhando para a atendente em outra aba...\nDeseja voltar para o começo?(S/N)").toUpperCase()
            if(voltar == 'S')
                inicio()
            else
                alert("Saindo...\nAté a próxima!")
            break


        case 'B':
            voltar = prompt("Encaminhado ao setor de RH em outra aba...\nDeseja voltar para o começo?(S/N)").toUpperCase()
            if(voltar == 'S')
                inicio()
            else
                alert("Saindo...\nAté a próxima!")
            break


        case 'C':
            voltar = prompt("Encaminhado para o gerente em outra aba...\nDeseja voltar para o começo?(S/N)").toUpperCase()
            if(voltar == 'S')
                inicio()
            else
                alert("Saindo...\nAté a próxima!")
            break


        case 'D':
            alert("Saindo...\nAté a próxima!")
            break

        default:
            voltar = promtp("Opção inválida\nDeseja voltar para o começo?(S/N)").toUpperCase()
            if(voltar == 'S')
                inicio()
            else
            alert("Saindo...\nAté a próxima!")
    }

}