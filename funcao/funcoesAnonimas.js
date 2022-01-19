const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4, 7)
imprimirResultado(4, 7, soma)
imprimirResultado(4, 7, function (x, y) {
    return x - y
})
imprimirResultado(4, 7, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Opá')
    }


    // Essa função também é valida
    /* falar() {
        console.log('Opá')
    } */
}

pessoa.falar()