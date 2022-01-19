// estrategia 1 para gerar valor padrão
// Essa é uma estrategia muito usada nos tempos de hj
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// Estrategia 2, 3, 4 para gerar valor
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // essa versão vai trazeer menos bugs para a sua aplicação
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor ES2015
// se tiver que escolher, escolha essa forma que é a versão mais nova
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))