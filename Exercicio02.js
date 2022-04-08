//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em: anos, em meses, em dias e em semanas.
let anoNasc,anoAtual,anos,meses, dias,semanas

anoNasc = Number(prompt("Digite o ano de nascimento:"))
anoAtual = Number(prompt("Digite o ano atual:"))

anos = anoAtual - anoNasc
meses = anos * 12
dias = meses * 30
semanas = dias / 4

alert(`A pessoa tem ${anos} anos, caso já tenha feito aniversário esse ano, caso não tenha feito, tem ${anos-1} anos.\nAproximadamente ${meses} meses de vida.\nAproximadamente ${dias} dias de vida.\nAproximadamente ${semanas} semanas de vida.`)
