const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}!`
// o template string vai considerar as quebras de linhas
console.log(concatenacao, template);

// expressoes
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()

/* function upp(texto) {
    return texto.toUpperCase();
} */
console.log(`Ei... ${up('cuidado')}!`)