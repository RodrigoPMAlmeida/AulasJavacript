//Programar as seguintes entradas de dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], [idade] anos, [nacionalidade], reside no endereço [endereço]."
let nome,idade,nacionalidade,endereco

nome = prompt("Digite o nome da pessoa:")
idade = prompt("Digite a idade da pessoa:")
nacionalidade = prompt("Digite a nacionalidade da pessoa:")
endereco = prompt("Digite o endereço da pessoa:")

alert(`Cliente ${nome}, ${idade} anos,nacionalidade ${nacionalidade}, reside no endereço ${endereco}.`)