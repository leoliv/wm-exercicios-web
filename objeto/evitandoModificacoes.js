// Object.preventExtensions - vai previnir que o objeto não receba mais atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', perco: 1.99, tag: 'promoção'
})
// A função Object.isExtensible(produto) ver se o objeto foi criado com a função Object.preventExtensions ou não
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // Modificar pode
produto.descricao = 'Borracha escolar branca' //Adicionar novos atributos não pode
delete produto.tag // deletar pode
console.log(produto)

// Object.seal - não pode adicionar atributos e deletar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Maria' // Não pode
delete pessoa.nome // não pode
pessoa.idade = 21 // pode
console.log(pessoa)

// Object.freeze = selado + valores constantes
const filme = Object.freeze({ titulo: 'Vingadores', ano: 2012 })
console.log('Congelado:', Object.isFrozen(pessoa))

filme.titulo = 'Vigadores - Ultimato'
filme.genero = 'Heroi'
delete filme.ano
console.log(filme)