// Isso é chamado de callback hell
/* setTimeout(function () {
    console.log('1 Execultando callback...')

    setTimeout(function () {
        console.log('2 Execultando callback...')

        setTimeout(function () {
            console.log('3 Execultando callback...')
        }, 2000)
    }, 2000)
}, 2000)

console.log(typeof setTimeout) */

let contagem = 3
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log(`Executando a promise em ${contagem--}`)
            resolve()
        }, tempo)
    })
}

// esperarPor(3000).then(texto => console.log(texto))

// Para fazer algo parecido com a callback hell à cima com promise
esperarPor()
    .then(esperarPor)
    .then(esperarPor)