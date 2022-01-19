console.log(typeof Object) // vai ser tipo funçao
console.log(typeof new Object) // vai ser tipo objeto

const Cliente = function(){}
console.log(typeof Cliente) // vai ser função
console.log(typeof new Cliente) // vai ser Objeto

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // vai ser convertido para uma funçao
console.log(typeof new Produto) // vai ser um objeto

// A class internamente ela é uma função