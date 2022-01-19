function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O valor escolhido foi ${opcao}.`)
} while (opcao != -1)

console.log('Fim de execução')