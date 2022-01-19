const filhas = ['Waleskah', 'Cibalena']
const filhos = ['Woshinton', 'Weskleiy']
let todos = filhas.concat(filhos) // concatenar
console.log(todos, filhas, filhos)

todos = filhas.concat(filhos, 'Fulano') // adicionar mais um elemento
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))