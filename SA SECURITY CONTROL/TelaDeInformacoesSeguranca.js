let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []
var segurancaAtual

function MostrarSegurancaAtual(){
    segurancaAtual = JSON.parse(localStorage.getItem('SegurancaAtual'))

    document.getElementById('texto').innerHTML = "Nome: "+segurancaAtual.nome + "<br>" +"CPF: "+ segurancaAtual.cpf + "<br>" +"Endereço: "+segurancaAtual.endereco + "<br>" + "Data de nascimento: "+segurancaAtual.nascimento + "<br>" + "Telefone: "+segurancaAtual.telefone + "<br>"
}

function IrParaEdicao(){
    window.location.href = "Tela_De_Edicao_Seguranca.html";
}