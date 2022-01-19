const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('Depois de Ler!')
    })
}
lerArquivo(caminho)
    .then(c => c.split('\n'))
    .then(l => l.join(', '))
    // .then(l => l[1])
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)