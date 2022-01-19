let valor // não inicializado
console.log(valor) // undefined porque não foi atribuido nada a essa variavel

valor = null // ausência de valor. Ela não aponta para nenuhum local na memória
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // Undefined
console.log(produto) // Objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // para tirar um atributo de um objeto use esse e não o undefined de cima
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)