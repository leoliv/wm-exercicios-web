// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

// RESOLUÇÃO QUE ENCONTREI
function cumprimentar(params) {
    console.log(`Olá, ${params}!`)
}

cumprimentar('Leonardo')

// Resolução do Material
function cumprimentar2(nome) {
    const saudacao = 'Olá'
    return [saudacao, nome].join(', ').concat('!')
}

console.log(cumprimentar2('João'))

// Resolução do Material
const cumprimentar3 = nome => 'Olá, ' + nome + '!'

console.log(cumprimentar3('Maria'))