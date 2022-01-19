// console.log(global)
// MinhaApp será visível em qualquer arquivo
/* global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Meu sistema legal'
} */

// Pode ser usado o freeze, que significa que esse objeto está congelado
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Meu sistema legal'
})