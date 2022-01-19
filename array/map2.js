const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
// Solução que eu fiz
const junp = e => {
    let r = JSON.parse(e)
    return r.preco
}
let resultado = carrinho.map(junp)
console.log(resultado)

// Solução do professor
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// Solução de um aluno
const resul = json => JSON.parse(json).preco
resultado = carrinho.map(resul)
console.log(resultado)

// Simplifiquei do aluno
const resul2 = json => JSON.parse(json).preco
console.log(carrinho.map(resul2))