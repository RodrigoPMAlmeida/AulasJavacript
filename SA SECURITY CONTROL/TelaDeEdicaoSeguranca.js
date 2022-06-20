let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []
var posicaoAtual = ""
var segurancaAtual


function MostrarUsuarioAtual(){
    document.getElementById("header").innerHTML = "<label id='usuarioAtual'>Usuario atual: " + JSON.parse(localStorage.getItem('UsuarioAtual')) +'</label>'
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
}


function mostrarDadosSeguranca(){
    segurancaAtual = JSON.parse(localStorage.getItem('SegurancaAtual'))


    document.getElementById('texto').innerHTML = "<center><br><br><input type='text' id='nome' value='"+segurancaAtual.nome+"'placeholder='Nome'><br><br><input type='text' id='cpf' value='"+segurancaAtual.cpf+"' placeholder='CPF'> <br><br>  <input type='tel' id='telefone' value='"+segurancaAtual.telefone+"' placeholder='Telefone'><br><br> Data de nascimento:<br><input type='date' id='nascimento' value='"+segurancaAtual.nascimento+"'placeholder='Data de nascimento'><br><br><input type='text' id='endereco' value='"+segurancaAtual.endereco+"'placeholder='Endereço'><br><br></center>"

}