let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []
var posicaoAtual = ""


function ListarSeguranca(){
    
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))
       
    for(var i=0; i<listaSeguranca.length; i++){

        posicaoAtual += "<a href='Tela_De_Informacoes_Seguranca.html'onclick='SalvarSegurancaAtual() id='"+i+"'>" + listaSeguranca[i].nome + "</a><br>"
        document.getElementById('texto').innerHTML = posicaoAtual

    }

}

function SalvarSegurancaAtual(){



}