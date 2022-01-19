// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

// Não consegui resolver
const filtrarNumeros = array => {
    const novoArray = []
    for (let i of array) {
        if (typeof i === 'number') {
            novoArray.push(i)
        }
    }
    return novoArray
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))


function filtarStrings(array) {
    const resultado = []
    for (let item of array) {
        if (typeof item === 'string')
            resultado.push(item)
    }
    return resultado
}
console.log(filtarStrings(["Javascript", 1, "3", "Web", 20]))

// 2ª resolução do material
function filtrarNumeros2(array) {
    return array.filter(item => typeof item === "number")
}
console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]))