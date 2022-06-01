let produto = {}
let produtoLista = []
let lista = ''

    
function cadastrarProduto(){

    produtoLista = JSON.parse(localStorage.getItem('produtoListaKey'))

    if(produtoLista == null){
        produtoLista = []
        produto = {
            nome: document.getElementById("nome").value,
            preco: document.getElementById("preco").value,
        }
        produtoLista.push(produto)
        localStorage.setItem('produtoListaKey', JSON.stringify(produtoLista))
        alert("Produto cadastrado!")
    }else{
        produto = {
            nome: document.getElementById("nome").value,
            preco: document.getElementById("preco").value,
        }
        produtoLista.push(produto)
        localStorage.setItem('produtoListaKey', JSON.stringify(produtoLista))
        alert("Produto cadastrado!")
    }

}
function listarProdutos(){
    produtoLista = JSON.parse(localStorage.getItem('produtoListaKey'))

    for(var i = 0; i<produtoLista.length; i++){
        lista = lista + Object.values(produtoLista[i]) + "<br>"
    }
    document.getElementById("baixo").innerHTML = lista

    lista = ""
}

function deletarProduto(){
    produtoLista = JSON.parse(localStorage.getItem('produtoListaKey'))
    produto = document.getElementById("nome").value
    preco = document.getElementById("preco").value

    for(var i = 0; i<produtoLista.length; i++){
        //alert(produtoObjeto.preco)
        if(produto == produtoLista[i].nome && preco == produtoLista[i].preco){
            produtoLista.splice(i,1)
            alert("Produto deletado")
            localStorage.setItem('produtoListaKey', JSON.stringify(produtoLista))
        }
    }
}

function alterarProduto(){
    produtoLista = JSON.parse(localStorage.getItem('produtoListaKey'))
    produto = document.getElementById("nome").value
    preco = document.getElementById("preco").value

    for(var i = 0; i<produtoLista.length; i++){
        if(produto == produtoLista[i].nome){
            produtoLista[i].preco = preco
            alert("Preço alterado")
            localStorage.setItem('produtoListaKey', JSON.stringify(produtoLista))
        }
    }
}