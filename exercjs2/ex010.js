// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

function simboloMais(quantidade) {
    let resultado = ''
    for (let i = 0; i < quantidade; i++)
        resultado += "+"
    console.log(resultado)
}
simboloMais(2)
simboloMais(4)

// RESOLUÇÃO DO MATERIAL 1
function simboloMais1(quantidade) {
    return Array(quantidade).fill('+').join('')
}
console.log(simboloMais1(2))
console.log(simboloMais1(6))

// RESOLUÇÃO DO MATERIAL 2
function simboloMais2(quantidade) {
    return "+".repeat(quantidade)
}
console.log(simboloMais2(2))
console.log(simboloMais2(7))