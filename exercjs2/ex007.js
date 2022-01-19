// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

// EU RESOLVI
function multiplicar(primeiro, segundo) {
    const n1 = typeof primeiro
    const n2 = typeof segundo
    if (n1 == 'number' && n2 == 'number' && primeiro >= 0 && segundo >= 0) {
        return Math.imul(primeiro, segundo)
    } else {
        return `Inválido! Digite apenas números positívos`
    }
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
// console.log(Math.imul(2, 2))

// Resolução do Material
function multiplicar1(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador - 1)
}
console.log(multiplicar1(5, 5))
console.log(multiplicar1(0, 7))

// Resolução do Materila 2
function multiplicar2(num, mult) {
    let resultado = 0
    for (let i = 0; i < mult; i++)
        resultado += num
    return resultado
}

console.log(multiplicar2(5, 5))
console.log(multiplicar2(0, 7))