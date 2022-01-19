//  Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

// Não resolvi
function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto) {
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

// Resposta do Material 2
function objetoParaArray2(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}
console.log(objetoParaArray2({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))

// Resposta do Material 3
function objetoParaArray3(objeto) {
    return Object.entries(objeto)
}
console.log(objetoParaArray3({
    nome: 'Leo',
    profissao: 'Programador'
}))