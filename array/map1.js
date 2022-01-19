const nums = [1, 2, 3, 4, 5]

// for com propósito
// O map não causa modificação no array atual
let resultado = nums.map(e => e * 2)

console.log(resultado)

// A function arrow tem o retorno implícito
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)