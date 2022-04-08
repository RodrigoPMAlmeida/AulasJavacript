let salarioAnual, salarioMensal, pisoSalarial

salarioAnual = Number(prompt("Digite o salário anual do funcionário:"))
pisoSalarial = Number(prompt("Digite o piso salarial mensal da categoria do funcionário:"))

salarioMensal = salarioAnual/12

if(salarioMensal < pisoSalarial){
    alert(`Salário mensal do funcionário: ${salarioMensal}\nO salário do funcionário está abaixo do piso salarial mensal :(`)
}
else{
    alert(`Salário mensal do funcionário: ${salarioMensal}\nO salário do funcionário alcançou o piso salarial mensal :)`)
}