const axios = require('axios')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        try {
            resolve(axios.get(url))
        } catch (e) {
            reject(e)
        }
    })
}

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')

    return [].concat(ta.data, tb.data, tc.data)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nome => console.log(nome))