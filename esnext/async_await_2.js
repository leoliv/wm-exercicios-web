function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        // fazer uma destructuring
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        // throw 'Que chato!'
        if (tentativas > 10) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }

}
// Uma forma que você tem para rejeitar uma promise dentro de uma função assíncrona, é gerando uma exeção (throw)
// Uma forma que você tem para resolver uma promise dentro de uma função assíncrona, é simplesmente retornando o valor
// Quando você retorna um valor, você está resolvendo a promise, e quando você lança uma exeção (throw) você está rejeitando uma promise
// Porque sempre quando você marca uma função assíncrona essa função vai retornar uma promessa (promise)

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

/* gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log) */

// irá preencher o array com 10 elementos undefined
console.log(Array(10).fill())