const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

//Desafio 1 - Todos os alunos são bolsistas?
let resultado1 = alunos.map(a => a.bolsista).reduce(function (acumulado, atual) {
    //    console.log(acumulado, atual)
    if (acumulado && atual) {
        return true
    } else {
        return false
    }
})
//Desafio 2 - Algum aluno é bolsista?
let resultado2 = alunos.map(a => a.bolsista).reduce(function (acumulado, atual) {
    //    console.log(acumulado, atual)
    if (acumulado || atual) {
        return true
    } else {
        return false
    }
})
 
console.log(`O Desafio 1 é ${resultado1} e o Desafio 2 é ${resultado2}`)