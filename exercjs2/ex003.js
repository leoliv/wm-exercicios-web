// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

// RESOLUÇÃO QUE RESOLVI
const calcularSalario = (horasTrabalhadas, granaPorHora) => {
    const total = horasTrabalhadas * granaPorHora
    return `Salário igual a R$ ${total}`
}
console.log(calcularSalario(150, 40.5))

// Resolução do Material
function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30 / 100
    return `Salário igual a R$ ${salarioLiquido}`
}
console.log(calcularSalarioLiquido(150, 40.5))