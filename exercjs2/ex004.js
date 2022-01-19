// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
// RESOLUÇÃO QUE RESOLVI
function nomeDoMes(mes) {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    console.log(`${meses[--mes]}`)
}
nomeDoMes(1)
nomeDoMes(4)

// Resolução do Material
function receberNomeDoMes1(numero) {
    switch (numero) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
}
console.log(receberNomeDoMes1(1))
console.log(receberNomeDoMes1(4))

function receberNomeDoMes2(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
}
console.log(receberNomeDoMes2(1))
console.log(receberNomeDoMes2(4))