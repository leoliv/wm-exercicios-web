// funçao sem retorno
function imprimirSoma(a, b) { // Pode receber qualquer tipo de dado
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // pode enviar apenas um numero. A resposta vai ser NaN por que o segundo número está undefined
imprimirSoma(2,3,4,5,6,7,8) // vai pegar apenas os dois primeiros e somar e o resto ele vai ignorar
imprimirSoma() // O resultado vai ser not a number (NaN), logo porque os dois parâmetros estão undefined
imprimirSoma("Olá ", "Mundo!") // vai concatenar
imprimirSoma(null, null) // vai dá zero
imprimirSoma(undefined, undefined) // vai dar NaN
imprimirSoma(false, false) // vai dá zero
imprimirSoma(false, true) // vai dá 1
imprimirSoma(true, true) // vai dá 2
imprimirSoma(true, 2) // vai dá 3
imprimirSoma(false, 2) // vai dá 2

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3)) // vai retornar 5
console.log(soma(2)) // vai retornar dois pq o segundo parâmetro da function é 3
console.log(soma()) // vai dá NaN porque o primeiro parâmetro está undefined