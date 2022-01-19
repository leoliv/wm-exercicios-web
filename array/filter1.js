const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'copo de Plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(p => false)) // vai retornar um array vazio
console.log(produtos.filter(p => true)) // vai retornar um array completo
console.log(produtos.filter(p => p.preco > 10)) // Você pode retornar com um tipo de critério
// console.log(produtos.filter(p => p.fragil == true && p.preco > 500)) // vai filtrar

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // por padão retorna true
console.log(produtos.filter(caro).filter(fragil))