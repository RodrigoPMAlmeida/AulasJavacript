let cadastroUsuario = [] 
let Conta = {}

function Cadastro(){

    cadastroUsuario = JSON.parse(localStorage.getItem(`Produtos`))    
   
    if(cadastroUsuario == null){
        
        cadastroUsuario = []
        Conta = {

            email: document.getElementById("email").value,
            senha:  document.getElementById("senha").value

        }
        if(Conta.email != "" && Conta.senha != "")
{        
            cadastroUsuario.push(Conta)
            localStorage.setItem(`Produtos`, JSON.stringify(cadastroUsuario))
            alert("e-mail e senha cadastrados!!")
}  

        else{
        alert("Insira todos os dados!");
        }

}
    else{

        Conta = {

            email: document.getElementById("email").value,
            senha:  document.getElementById("senha").value
    }

        if(Conta.email != "" && Conta.senha != ""){
               
                    cadastroUsuario.push(Conta)
                    localStorage.setItem(`Produtos`, JSON.stringify(cadastroUsuario))
                    alert("e-mail e senha cadastrados!!")
            }  
        
        else{
            
                alert("Insira todos os dados!");

        }
}
}

function Login(){

    cadastroUsuario = JSON.parse(localStorage.getItem(`Produtos`))


}