let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []
var nomes = ""
var segurancaAtual
var idSeguranca


function MostrarUsuarioAtual(){
    document.getElementById("header").innerHTML = "<label id='usuarioAtual'>Usuario atual: " + JSON.parse(localStorage.getItem('UsuarioAtual')) +'</label>'
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
}


function ListarSeguranca(){
    
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))
       
    for(var i=0; i<listaSeguranca.length; i++){

        nomes += "<a onclick='SalvarSegurancaAtual("+i+"),MostrarSegurancaAtual()' id='itemLista'>" + listaSeguranca[i].nome + "</a><br>"


        document.getElementById('listaDados').innerHTML = nomes

    }

}

function SalvarSegurancaAtual(i){   

    segurancaAtual = null

    idSeguranca = i

    localStorage.setItem(`PosicaoSeguranca`, JSON.stringify(idSeguranca))
    
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))

    segurancaAtual = listaSeguranca[i]

    localStorage.setItem(`SegurancaAtual`, JSON.stringify(segurancaAtual))

}

function MostrarSegurancaAtual(){
    segurancaAtual = JSON.parse(localStorage.getItem('SegurancaAtual'))

    document.getElementById('seguranca').innerHTML = "Nome: "+segurancaAtual.nome + "<br>" +"CPF: "+ segurancaAtual.cpf + "<br>" +"Endereço: "+segurancaAtual.endereco + "<br>" + "Data de nascimento: "+segurancaAtual.nascimento + "<br>" + "Telefone: "+segurancaAtual.telefone + "<br>"
    document.getElementById('botao').innerHTML = "<button onclick='IrParaEdicao()'>Editar</a><br> <button onclick=''>Excluir</a>"

}



function IrParaEdicao(){
    window.location.href = "Tela_De_Edicao_Seguranca.html";
}

function MostrarUsuarioAtual(){
    document.getElementById("header").innerHTML = "<label id='usuarioAtual'>Usuario atual: " + JSON.parse(localStorage.getItem('UsuarioAtual')) +'</label>'
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
}