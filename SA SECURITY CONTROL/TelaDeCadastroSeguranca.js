let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []


function MostrarUsuarioAtual(){
    document.getElementById("header").innerHTML = "<label id='usuarioAtual'>Usuario atual: " + JSON.parse(localStorage.getItem('UsuarioAtual')) +'</label>'
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
}


function cadastrarSeguranca(){
     
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))
     
    if(listaSeguranca == null){

        listaSeguranca = []
        Seguranca = {

            nome: document.getElementById("nomeSegurança1").value,
            cpf: document.getElementById("cpfSegurança1").value,
            telefone: document.getElementById("telefoneSegurança1").value,
            idade: document.getElementById("idadeSegurança1").value,

        }

    if(Seguranca.nome != "" && Seguranca.cpf != "" && Seguranca.telefone!= "" && Seguranca.idade != "" )
                   
            listaSeguranca.push(Seguranca)
            localStorage.setItem(`SegurancasADM`, JSON.stringify(listaSeguranca))

        
    }

}

function Deslogar(){
    usuarioAtual = JSON.parse(localStorage.getItem('UsuarioAtual'))
    usuarioAtual = null;
    localStorage.setItem(`UsuarioAtual`, JSON.stringify(usuarioAtual))
    alert("Deslogando...")

}