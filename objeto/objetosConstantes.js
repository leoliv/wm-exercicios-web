// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Marcelo'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Maria' } // vai dá erro

Object.freeze(pessoa) // vai congelar, e não será mais possivel mudar o atributo

pessoa.nome = 'Maria' // não funcionará trocar o atributo
pessoa.end = 'Rua ABC' // não funcionará adicionar um novo atributo
delete pessoa.nome // não funcionará deletar o atributo
console.log(pessoa)

// Para criar um objeto para ser constante e nunca ser mudado
const pessoaConstante = Object.freeze({ nome: 'Freeza' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)