const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Criar um objeto novo tendo como prototipo o pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // Não lista os atributos de herança por padrão
console.log(Object.keys(filha2))

// Para saber se pertence ao proprio objeto ou se veio por herança
for(let key in filha2) {
    // console.log(key)
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`)
}