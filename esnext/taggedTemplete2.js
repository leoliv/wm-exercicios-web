
function real(partes, ...valores) {
    const resultado = []
    // console.log(partes)
    // console.log(valores)
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        // console.log(valor)
        resultado.push(partes[indice], valor)
        resultado.push(partes[partes.length - 1])
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcelado = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcelado}.`)