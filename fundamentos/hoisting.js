// O que ocorrerá aqui é um içamento da variavel a para cima. Em outras linguagens isso daria um erro
// O que realmente aconteceu foi isso
/* var a
console.log('a =', a)
a = 2
console.log('a =', a) */

console.log('a =', a)
var a = 2
console.log('a =', a)

// O efeito de içamento quando vc declara uma variavel com let não ocorre
console.log('b = ', b)
let = 10
console.log('b = ', b)

// Hoisting is JavaScript's default behavior of moving declarations to the top.