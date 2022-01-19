const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) // vai gerar um array que contém dois arrays das duas turmas

// Queremos um array que contenha todas as notas em apenas uma estrutura, e não um array de array
// Exemplo que queremos
console.log([].concat([8.1, 9.3], [8.9, 7.3]))

// A ideia do flatMap2 (Criado) é conseguir isso
Array.prototype.flatMap2 = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
// Exatamente o que esperamos
const notas2 = escola.flatMap2(getNotasDaTurma)
console.log(notas2)

// O flatMap passou a existir como método padrão da linguagem
const notas3 = escola.flatMap(getNotasDaTurma)
console.log(notas3)

// Uso do apply
function HelloWorld() { console.log(this.nome); } HelloWorld.apply({ nome: 'Fulano' }) // Resultado: Fulano