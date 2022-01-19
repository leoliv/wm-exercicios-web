const moduloA = require('../../moduloA') // essa forma de todas as letras minusculas, vai funcinar no MAC, no Windows e NÃO NO LINUX. COLOQUE os nomes respeitando Maiusculos e Minusculos   
console.log(moduloA.ola)

// const saudacao = require('saudacao')
// console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)