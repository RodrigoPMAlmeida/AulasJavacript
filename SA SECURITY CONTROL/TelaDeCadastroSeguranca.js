let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []


function MostrarUsuarioAtual(){
    document.getElementById("header").innerHTML = "<label id='usuarioAtual'>Usuario atual: " + JSON.parse(localStorage.getItem('UsuarioAtual')) +'</label>'
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
}


function cadastrarSegurança(){
     
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))
     
    if(listaSeguranca == null){
        listaSeguranca = []


    }

}