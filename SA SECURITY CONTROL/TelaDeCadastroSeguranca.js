let cadastroUsuario = [] 
let Conta = {}
let Seguranca = {}
let listaSeguranca = []


function MostrarUsuarioAtual(){
    usuarioAtual = JSON.parse(localStorage.getItem('UsuarioAtual'))
    document.getElementById("usuarioAtual").innerHTML = "Usuario Atual: " + usuarioAtual.usuario
    //+'<br><a id="deslogar" onclick="Deslogar()" href="Tela_de_Login.html">Deslogar</a>'
  }

function cadastrarSeguranca(){
     
    listaSeguranca = JSON.parse(localStorage.getItem('Segurancas'))
     
    if(listaSeguranca == null){

        listaSeguranca = []
        Seguranca = {

            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            telefone: document.getElementById("telefone").value,
            nascimento: document.getElementById("nascimento").value,
            endereco: document.getElementById("endereco").value,
            tag: document.getElementById("tagSeguranca").value

        }

    if(Seguranca.nome != "" && Seguranca.cpf != "" && Seguranca.telefone!= "" && Seguranca.nascimento != "" && Seguranca.endereco != "" ){
                   
            listaSeguranca.push(Seguranca)
            localStorage.setItem(`Segurancas`, JSON.stringify(listaSeguranca))
            alert("Deu certoooo!! ")
    }
            else{

                alert("preencha todos os dados")
            }
    
    }
    else{
        
        Seguranca = {

            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            telefone: document.getElementById("telefone").value,
            nascimento: document.getElementById("nascimento").value,
            endereco: document.getElementById("endereco").value,
            tag: document.getElementById("tagSeguranca").value
        }

        if(Seguranca.nome != "" && Seguranca.cpf != "" && Seguranca.telefone!= "" && Seguranca.nascimento != "" && Seguranca.endereco != "" ){   
            listaSeguranca.push(Seguranca)
            localStorage.setItem(`Segurancas`, JSON.stringify(listaSeguranca))
            alert("Deu certoooo!! ")
        }
            else{
                alert("preencha todos os dados")
            }
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

