let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []
var nomes = ""
var cpfs = ""
var segurancaAtual
var idSeguranca

function MostrarSegurancaAtual(){
    segurancaAtual = JSON.parse(localStorage.getItem('SegurancaAtual'))

    document.getElementById('seguranca').innerHTML = "Nome: "+segurancaAtual.nome + "<br>" +"CPF: "+ segurancaAtual.cpf + "<br>" +"Endereço: "+segurancaAtual.endereco + "<br>" + "Data de nascimento: "+segurancaAtual.nascimento + "<br>" + "Telefone: "+segurancaAtual.telefone + "<br>"
    document.getElementById('botao').innerHTML = `<button onclick='MostrarEdicao()'>Editar</a> <button onclick='ExcluirSeguranca()'>Excluir</a>`

    document.getElementById('edicaoDentro').innerHTML = ""
}

function SalvarSegurancaAtual(i){   

    segurancaAtual = null

    idSeguranca = i

    localStorage.setItem(`PosicaoSeguranca`, JSON.stringify(idSeguranca))
    
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))

    segurancaAtual = listaSeguranca[i]

    localStorage.setItem(`SegurancaAtual`, JSON.stringify(segurancaAtual))

}

function MostrarUsuarioAtual(){
    usuarioAtual = JSON.parse(localStorage.getItem('UsuarioAtual'))
    document.getElementById("usuarioAtual").innerHTML = "Usuario Atual: " + usuarioAtual.usuario
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
  }

  function ListarSeguranca(){
    
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))
       
    for(var i=0; i<listaSeguranca.length; i++){

        nomes += "<a onclick='SalvarSegurancaAtual("+i+"),MostrarSegurancaAtual()' id='Seguranca'>" + listaSeguranca[i].nome + "</a><br>"
        cpfs += "<a onclick='SalvarSegurancaAtual("+i+"),MostrarSegurancaAtual()' id='Seguranca'>" + listaSeguranca[i].cpf + "</a><br>"

        document.getElementById('listaNomes').innerHTML = nomes
        document.getElementById('listaCPF').innerHTML = cpfs

    }

}

  function Deslogar(){
    usuarioAtual = JSON.parse(localStorage.getItem('UsuarioAtual'))
    usuarioAtual = null;
    localStorage.setItem(`UsuarioAtual`, JSON.stringify(usuarioAtual))
    alert("Deslogando...")
    window.location.href = "Tela_de_Login.html";

}

function VoltarIndex(){
    window.location.href = "index.html";
}