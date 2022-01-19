let dobro = function (a) {
    return 2 * a
}

// Uma function arrow sempre vai ser uma função anomima. Se vc quiser chamar ela depois, sempre se deve armazenar ela em uma variável ou em uma constante
dobro = (a) => {
    return 2 * a
}

// Escrever ela de uma forma mais reduzida se tiver apenas um parâmetro. Quando vc tem apenas uma única linha, o retorno ele é implícito sem o corpo
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())