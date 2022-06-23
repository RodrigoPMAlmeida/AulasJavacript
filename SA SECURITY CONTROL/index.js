let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []
const url = "http://192.168.45.29"


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

function cadastrarSegurança(){
     
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))
     
    if(listaSeguranca == null){
        

    }

}

setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {	
        //caso receba alguma informação 
        document.getElementById("tag").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url+"/rfid", true);    
    xhttp.send();
  }, 3000 ) ;
