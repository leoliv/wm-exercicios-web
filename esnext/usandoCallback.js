// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado)) 
        })
    })
}

// Não é tão legal fazer isso hoje em dia; Isso é o que chamamos de callback-hell
let nomes = []
getTurma('A', alunos => {
    // console.log(alunos)
    // console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})