// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
// RESOLUÇÃO QUE RESOLVI
function maiorOuIgual(num1, num2) {
    return num1 > num2 || num1 === num2
}
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))

// Resolução do Material
function maiorOuIgual1(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}
console.log(maiorOuIgual1(0, 0))
console.log(maiorOuIgual1(0, "0"))
console.log(maiorOuIgual1(5, 1))