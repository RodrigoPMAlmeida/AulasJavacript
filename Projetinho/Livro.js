let livro = {}
let biblioteca = []
let lista = ""

    
function cadastrarLivro(){

    biblioteca = JSON.parse(localStorage.getItem('bibliotecaKey'))

    if(biblioteca == null){
        biblioteca = []
        livro = {
            nome: document.getElementById("nome").value,
            autor: document.getElementById("autor").value,
            ano: document.getElementById("ano").value
        }
        biblioteca.push(livro)
        localStorage.setItem('bibliotecaKey', JSON.stringify(biblioteca))
        alert("Livro cadastrado!")
    }else{
        livro = {
            nome: document.getElementById("nome").value,
            autor: document.getElementById("autor").value,
            ano: document.getElementById("ano").value
        }
        biblioteca.push(livro)
        localStorage.setItem('bibliotecaKey', JSON.stringify(biblioteca))
        alert("Livro cadastrado!")
    }

}

function listarLivros(){
    biblioteca = JSON.parse(localStorage.getItem('bibliotecaKey'))

    for(var i = 0; i<biblioteca.length; i++){
        lista = lista + Object.values(biblioteca[i])
    }
    document.getElementById("baixo").innerHTML = lista

    lista = ""

}