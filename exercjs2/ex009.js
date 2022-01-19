// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repetir = (nome, numVezes) => {
    const array = []
    for (let i = 0; i < numVezes; i++)
        array.push(nome)
    return array
}
console.log(repetir('código', 2))
console.log(repetir(7, 3))

// RESOLUÇÃO DO MATERIAL 1
function repetir1(item, quantidade) {
    return Array(quantidade).fill(item)
}
console.log(repetir1('código', 2))
console.log(repetir1(7, 3))