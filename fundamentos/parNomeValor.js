// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: "Fulano",
    idade: 23,
    peso: 90,
    endereco: {
        rua: 'Lugar muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)