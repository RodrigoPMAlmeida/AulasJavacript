let cadastroUsuario = [] 
let Conta = {}


function Deslogar(){
    usuarioAtual = JSON.parse(localStorage.getItem('UsuarioAtual'))
    usuarioAtual = null;
    localStorage.setItem(`UsuarioAtual`, JSON.stringify(usuarioAtual))
    alert("Deslogando...")

}

function MostrarUsuarioAtual(){
    document.getElementById("header").innerHTML = "<label id='usuarioAtual'>Usuario atual: " + JSON.parse(localStorage.getItem('UsuarioAtual')) +'</label>'
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
}