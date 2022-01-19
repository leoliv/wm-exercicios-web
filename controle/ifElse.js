const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa!') // Já que javascript é uma linguagem fracamente tipada, ela vai aceitar uma string, mas o primeiro bloco 'if' não será executado, apenas o 'else'