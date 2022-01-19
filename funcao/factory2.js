/* function criarProduto(nome, preco, codigo) {
    return {
        nome: nome,
        preco: preco,
        codigo: codigo
    }
}

console.log(criarProduto('Detegente', 12.99, 12345))
console.log(criarProduto('Desinfetante', 8.99, 23523)) */
// Exercicio que eu criei

// Exercicio criado no curso
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto('iPad', 1199.99))