function esperar(tempo = 1000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo);
    })
}

/* esperar(2000)
    .then(() => console.log('Executando Promise 1...'))
    .then(esperar)
    .then(() => console.log('Executando Promise 2...'))
    .then(esperar)
    .then(() => console.log('Executando Promise 3...')) */

function retornValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 3000)
    })
}

async function retornValueFast() {
    return 20
}

// Por trás do async/await tem que ter uma promise
async function executar() {
    let valor = await retornValueFast() // sem o await vai retornar uma promise

    await esperar(1500)
    console.log(`Async/Await ${valor}...`)

    await esperar(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperar(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}
// quando você sair de uma função asyncrona para o mundo normal, você vai ter que precisar do then
// executar().then(console.log)

async function esperarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

esperarDeVerdade()