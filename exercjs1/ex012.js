// 12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n) {
    let resultado = n
    for (let i = n - 1; i > 0; i--) {
        resultado *= i
    }
    return resultado
}

console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(10))