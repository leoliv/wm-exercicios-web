function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3) // vai imprimir no console
logParams(1, 2, 3, 4, 5) // vai imprimir no console os tres primeiros e ignorar os demais
logParams(1, 2,) // vai mostrar o 'a' e 'b' e o 'c' vai ser undefined
logParams(1) // 1 undefined undefined
logParams() // undefined undefined undefined
let x = logParams(1, 2)
console.log(x) // vai dá undefined

function defautParams(a, b, c = 0) {
    console.log(a, b, c)
}

defautParams(1, 2)

// spread/rest
function logNums(...nums) {
    console.log(nums)
}

logNums(1, 2, 3, 4, 5)

function sumAll(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))