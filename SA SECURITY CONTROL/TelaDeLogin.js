let cadastroUsuario = [] 
let Conta = {}

function Login(){

    cadastroUsuario = JSON.parse(localStorage.getItem(`Logins`));
    usuarioDigitado = document.getElementById("usuario").value;
    senhaDigitada = document.getElementById("senha").value;
    validacao = false;

    if(cadastroUsuario == null){
            alert("Usuário ou senha não encontrado!")
        }
    
    else{
        for(var i = 0; cadastroUsuario[i]; i++){
            if(usuarioDigitado == cadastroUsuario[i].usuario && senhaDigitada == cadastroUsuario[i].senha)
            {
                alert(`Bem-vindo ${cadastroUsuario[i].usuario}`);
                validacao = true
                localStorage.setItem(`UsuarioAtual`, JSON.stringify(cadastroUsuario[i]))
                localStorage.setItem(`PosicaoLogin`, JSON.stringify(i))
            }
        }
        if(validacao == true)
        {
            alert("Usuário logado com sucesso!");

            IrParaIndex();
        }
        else
        {
           alert("Usuário ou senha não encontrado!")
        }
    
    }
}

function IrParaIndex(){
    window.location.href = "index.html";
}

function IrParaCadastro(){
    window.location.href = "Tela_de_cadastro_de_usuário.html";
}