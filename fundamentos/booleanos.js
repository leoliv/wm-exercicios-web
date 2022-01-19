let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive) // colocando a negação duas vezes ele passa a ser verdadeiro, uma vez, negativo.

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('os falsos...')
console.log(!!0) // o zero vai ser falso
console.log(!!'') // uma string vazia vai ser falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))
console.log(!!('' || null || 0 || ' ')) // vai retornar verdadeiro
console.log(('' || null || 0 || 'epa')) // vai retornar o único valor que ele achou verdadeiro dessa expressão, no caso, 'epa'

let nome = 'Lucas'
console.log(nome || 'Desconhecido')