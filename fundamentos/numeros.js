const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
// dentro do Number você pode verificar se uma variável é inteiro ou não
console.log(Number.isInteger(peso2))

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media);

// Para controlar a quantidade de casas decimais, coloque após a variável .toFixed(2) 2 é a quantidade de números de casas.
console.log(media.toFixed(2));

// Converter um valor em uma string
console.log(media.toString())

// Converter a string em um valor binário basta colocar 2 no .toString(2)
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)


// Os dados tem funções acompanhas com eles.