let cadastroUsuario = [] 
let Conta = {}

function Cadastro(){

    cadastroUsuario = JSON.parse(localStorage.getItem(`Logins`))    
   
    if(cadastroUsuario == null){
        
        cadastroUsuario = []
        Conta = {

            usuario: document.getElementById("usuario").value,
            senha:  document.getElementById("senha").value

        }
        if(Conta.usuario != "" && Conta.senha != "")
{        
            cadastroUsuario.push(Conta)
            localStorage.setItem(`Logins`, JSON.stringify(cadastroUsuario))
            alert("e-mail e senha cadastrados!!")

            IrParaLogin()
}  
        else{
            alert("Insira todos os dados!");
        }
}
    else{
        Conta = {
            usuario: document.getElementById("usuario").value,
            senha:  document.getElementById("senha").value
        }

        
        if(Conta.usuario != "" && Conta.senha != ""){
               
                    cadastroUsuario.push(Conta)
                    localStorage.setItem(`Logins`, JSON.stringify(cadastroUsuario))
                    alert("Usuário e senha cadastrados!!")

                    IrParaLogin()
        }  
        
        else{
            alert("Insira todos os dados!");

        }
    }


}

function IrParaLogin(){

    window,location.href = "Tela_de_Login.html";
}