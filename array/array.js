// new + function é um objeto
console.log(typeof Array, typeof new Array)
// se typeof em um array literal '[]' ou objeto literal '{}' é um objeto
console.log(typeof [], typeof {})
// array em javascript é uma função heterogênia, pode aceitar qualquer tipo de valor

let aprovados = new Array('Carlos', 'Ana', 'Leo')
console.log(aprovados)

// Usando a anotação literal - RECOMENDADO
aprovados = ['Carlos', 'Ana', 'Leo']
// acessando apartir da posição do array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // em outras linguagens daria um erro, mas já em javascript vai dá undefined

// Forma de adicionar um elemento dentro de um  array
aprovados[3] = 'Marcos' // aqui é mais apropriado para adicionar substituindo
console.log(aprovados[3])

// outra forma de adicionar um elemento dentro de um array
aprovados.push('Daniel') // aqui é mais apropriado para adicionar um elemento depois do indice
console.log(aprovados[4])
console.log(aprovados.length) // vai imprimir o tamanho do array

aprovados[9] = 'Fernanda'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined) //verdadeiro, porque essa posição está vazia
console.log(aprovados[8] === null) // falso, porque essa posição não é nula, apenas undefined

// ordenando a lista de arrays apartir do sort
console.log(aprovados)
aprovados.sort() // vai alterar a lista ordenando-as
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
/* aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // vai excluir apartir do indece 1 dois elementos, e adicionar 2 elementos
console.log(aprovados) */

// excluir nenhum
/* aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados) */

// excluir apenas 1k
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)