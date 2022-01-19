console.log(module.exports === this) // this é uma referencia para module.exports
console.log(module.exports === exports) // module.exports aponta para exports

// se eu fizer
this.a = 1 // o 'a' será visível fora do arquivo 
exports.b = 2 // o 'b' também ficará visível fora
module.exports.c = 3 // também será exportado para fora

exports = null
console.log(module.exports)

exports = { // não é bom usar dessa forma
    nome: 'Gaspar'
}
console.log(module.exports)

// A forma correta de usar é essa
module.exports = { publico: true }