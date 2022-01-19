// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)) // vai transformar em um array as chaves em strings
console.log(Object.values(obj)) // vai transformar em array os valores do obj
console.log(Object.entries(obj)) // vai transformar em uma matriz, array de array de chave e valor

// Melhorias na anotação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())