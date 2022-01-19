// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
/* Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário. */

// RESOLUÇÃO QUE RESOLVI
const converterIdadeEmAnosParaDias = idade => idade * 365
console.log(converterIdadeEmAnosParaDias(25))
console.log(converterIdadeEmAnosParaDias(70))


// Resoluções extras do Material
function converterIdadeEmAnosParaDias1(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}
console.log(converterIdadeEmAnosParaDias1(25))
console.log(converterIdadeEmAnosParaDias1(70))