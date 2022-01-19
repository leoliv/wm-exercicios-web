// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

// RESOLVIDO
function receberSomenteOsParesDeIndicesPares(array) {
    const newArray = []
    for (let i in array) {
        if (array[i] % 2 == 0 && i % 2 == 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]

// Resolução do Professor 1
function receberSomenteOsParesDeIndicesPares1(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0
        if (numeroPar)
            resultado.push(numeros[i])
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares1([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares1([10, 70, 22, 43])) // retornará [10, 22]

// Resolução do Professor 2
function receberSomenteOsParesDeIndicesPares2(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
}
console.log(receberSomenteOsParesDeIndicesPares2([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43])) // retornará [10, 22]