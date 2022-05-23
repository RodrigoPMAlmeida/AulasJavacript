let usuario, senha, usuarioTela, senhaTela, validacao

function NovoLogin(){
    

    usuario = JSON.parse(localStorage.getItem('usuariosKey'))
    senha = JSON.parse(localStorage.getItem('senhasKey'))

    if(usuario == null){
        usuario = []
        senha = []
        //document.getElementById("usuario")
        //document.getElementById("senha")
        usuarioTela = document.getElementById("usuario").value;
        senhaTela = document.getElementById("senha").value;
        usuario.push(usuarioTela)
        senha.push(senhaTela)
        localStorage.setItem('usuariosKey', JSON.stringify(usuario))
        localStorage.setItem('senhasKey', JSON.stringify(senha))
        alert(`Login cadastrado!\nUsuário: ${usuarioTela}\nSenha: ${senhaTela}`)
}
    else{
        //usuarioTela.value = document.getElementById("usuario")
        //senhaTela.value = document.getElementById("senha")
        usuarioTela = document.getElementById("usuario").value;
        senhaTela = document.getElementById("senha").value;
        usuario.push(usuarioTela)
        senha.push(senhaTela)
        localStorage.setItem('usuariosKey', JSON.stringify(usuario))
        localStorage.setItem('senhasKey', JSON.stringify(senha))
        alert(`Login cadastrado!\nUsuário: ${usuarioTela}\nSenha: ${senhaTela}`)
    }   
}

function Logar(){

    usuario = JSON.parse(localStorage.getItem('usuariosKey'))
    senha = JSON.parse(localStorage.getItem('senhasKey'))
    usuarioTela = document.getElementById("usuario").value;
    senhaTela = document.getElementById("senha").value;
    validacao = false

    for(var i = 0; i < usuario.length; i++){
        if(usuario[i] == usuarioTela && senha[i] == senhaTela){
            validacao = true
        }
    }   
    if(validacao == true){
        alert("Sucesso!")
    }
    else{
        alert("Login incorreto!")
    }
}