const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = a => a.pais === 'China'
const mulheres = a => a.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data

    // obter a mulher chinesa que tem o menor salário
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})




