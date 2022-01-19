
// Tenha muito cuidado quando for usar esse tipo de recurso
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) // O segundo valor, que foi omitido aqui, vai ser undefined e valor * undefined é NaN
console.log(area()) // undefined * undefined é NaN
console.log(area(2, 3, 6, 7, 4)) // vai calcular apenas os dois primeiros
console.log(area(2, 3, 6, 7, 4)) // vai calcular apenas os dois primeiros
console.log(area(5, 5)) // no caso, a função vai imprimir o seu na tela, e como não foi retornado nada, fora da função será impresso undefined 
