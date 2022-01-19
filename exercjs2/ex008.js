// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        if (numero >= minimo && numero <= maximo) {
            return true
        } else {
            return `${numero} não está entre o minimo e maximo`
        }
    } else {
        if (!inclusivo) {
            return false
        }
    }
}

console.log(estaEntre(7, 5, 10))
console.log(estaEntre(11, 5, 10, true))
console.log(estaEntre(7, 5, 10, true))
console.log()

// Resolução do Material
function estaEntre1(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}
console.log(estaEntre1(10, 100, 50)) // retornará true
console.log(estaEntre1(16, 100, 160)) // retornará false
console.log(estaEntre1(3, 150, 3)) // retornará false
console.log(estaEntre1(3, 150, 3, true)) // retornará true
console.log()

// Resolução do Material 2
function estaEntre2(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(estaEntre2(10, 100, 50)) // retornará true
console.log(estaEntre2(16, 100, 160)) // retornará false
console.log(estaEntre2(3, 150, 3)) // retornará false
console.log(estaEntre2(3, 150, 3, true)) // retornará true