const pessoa = {
    nome: 'Maria',
    idade: 2,
    peso: 13
}

// Vai pegar todas as chaves do objeto pessoa
console.log(Object.keys(pessoa))
// vai pegar todos os valores de um objeto
console.log(Object.values(pessoa))
// vai pegar todos os valores e chaves com arrays
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, // true = vai ta visível, false = não vai tá visível
    writable: false,
    value: '20/10/1995'
})

pessoa.dataNascimento = '22/09/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 3 }
const o2 = { c: 6, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)