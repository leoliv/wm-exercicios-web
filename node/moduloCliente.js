// Sempre que usar cliente no arquivo, esse arquivo acessará outro
const moduloA = require('./moduloA') // se o arquivo for .js não precisa colocar a extensão
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite('Leo'))
console.log(moduloB)

console.log(this === module.exports)