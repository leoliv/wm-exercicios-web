function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // passar só o valor de min
console.log(rand([, 10])) // passar só o valor de max
console.log(rand([])) // assumindo os valores padrões
// console.log(rand()) // vai da um erro
