// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
function recebPriEUltimElem(elem) {
    const primeiroIndice = 0
    const ultimoIndice = elem.length - 1
    const primeiroElemento = elem[primeiroIndice]
    const ultimoElemento = elem[ultimoIndice]
    return [primeiroElemento, ultimoElemento]
}

console.log(recebPriEUltimElem([7, 14, "olá"]))

// Resolução do material
function receberPrimeiroEUltimoElemento1(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento1([7, 14, "olá"]))

// Resolução do material
function receberPrimeiroEUltimoElemento2([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento2([7, 14, "olá"]))