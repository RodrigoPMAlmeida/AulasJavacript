let cadastroUsuario = [] 
let Conta = {}

function Cadastro(){

    cadastroUsuario = JSON.parse(localStorage.getItem(`Logins`))   
    confirmarSenha = document.getElementById("confirmarSenha").value 
   
    if(cadastroUsuario == null){
        
        cadastroUsuario = []
        
        Conta = {

            usuario: document.getElementById("usuario").value,
            sobrenome: document.getElementById("sobrenome").value,
            nascimento: document.getElementById("nascimento").value,
            cpf: document.getElementById("cpf").value,
            senha:  document.getElementById("senha").value

        }
        if(Conta.usuario != "" && Conta.sobrenome != "" && Conta.cpf != "" && Conta.nascimento != "" && Conta.senha != "" )
        {        
            if(Conta.senha != confirmarSenha){
                alert("Erro na confirmação da senha")
            }
            else{
            cadastroUsuario.push(Conta)
            localStorage.setItem(`Logins`, JSON.stringify(cadastroUsuario))
            alert("Usuário cadastrado!")

            IrParaLogin()
            }
}  
        else{
            alert("Insira todos os dados!");
        }
}
    else{
        Conta = {
            usuario: document.getElementById("usuario").value,
            sobrenome: document.getElementById("sobrenome").value,
            nascimento: document.getElementById("nascimento").value,
            cpf: document.getElementById("cpf").value,
            senha:  document.getElementById("senha").value
        }

        
        if(Conta.usuario != "" && Conta.sobrenome != "" && Conta.cpf != "" && Conta.nascimento != "" && Conta.senha != "" ){
            if(Conta.senha != confirmarSenha){
                alert("Erro na confirmação da senha")
            }
            else{
                    cadastroUsuario.push(Conta)
                    localStorage.setItem(`Logins`, JSON.stringify(cadastroUsuario))
                    alert("Usuário e senha cadastrados!!")

                    IrParaLogin()
            }
        }  
        
        else{
            alert("Insira todos os dados!");

        }
    }


}

function IrParaLogin(){

    window,location.href = "Tela_de_Login.html";
}