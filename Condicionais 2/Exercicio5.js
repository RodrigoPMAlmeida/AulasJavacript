//5) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Perdir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

let login,senha,userLogin,userSenha

login = "admin"
senha = "123"

userLogin = prompt("Digite o usuário:")
userSenha = prompt("Digite a senha:")

if(userLogin == login && userSenha == senha){
    alert("Login efetuado!")
}else if(userLogin == login && userSenha != senha){
    alert("Senha incorreta")
}else if(userLogin != login && userSenha == senha){
    alert("Usuário incorreto")
}else{
    alert("Login e senha erradas!")
}