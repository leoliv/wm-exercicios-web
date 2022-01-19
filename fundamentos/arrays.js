const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // vai dar o valor undefined

valores[4] = 10 // atribuindo o valor ao array que faltava
console.log(valores)

// mas se colocar em um array mais distante...
/* valores[10] = 23
console.log(valores) // vai imprimir: [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 23 ] */

console.log(valores.length) // vai contar quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // vai tirar o último elemento do array e vai imprimi-lo na tela
delete valores[0] // vai deletar o ultimo elemento.
console.log(valores)

console.log(typeof valores) // um array é do tipo object