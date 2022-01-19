// Como pegar parâmentros através da minha chamada diretamente no terminal
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo) {
    console.log('Fala, Anônimo!')
    process.exit() // matar o processo
} else { // se a flag não for passada
    // stdout é a saída padrão
    process.stdout.write('Informe o seu nome: ')
    // stdin é quando vc digita no teclado
    // no evento 'on data' vai acontecer quando vc digita alguma coisa e dá o Enter
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}