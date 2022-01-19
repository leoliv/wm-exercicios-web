let a = 1
console.log(a)
// A nomenclatura 'cumprirPromessa' é chamada de 'resolve'
let p = new Promise(function (resolve) {
    // resolve(3)
    // A promise sempre é devolvido 1 valor, não dois ou três... Será retornado apenas como objeto

    /* resolve({
        x: 3,
        y: 5
    }) */

    // Uma lista de Array
    resolve(['Ana', 'Marcela', 'João', 'Ferreira'])
})

// console.log(typeof Promise) // Console: function

console.log(typeof p) // console: object

// Receber Object
/* p.then(function (valor) {
    console.log(valor.y)
}) */

p.then(function (valor) {
    console.log(valor)
})

const arrayOuString = valor => valor[0]

const letraMinuscula = mini => mini.toLowerCase()

// O 'then' sempre recebe um único parâmetro
new Promise(function (cumprindoPromessa) {

    cumprindoPromessa(['Ana', 'Marcela', 'João', 'Ferreira'])
})
    .then(arrayOuString)
    .then(arrayOuString)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)