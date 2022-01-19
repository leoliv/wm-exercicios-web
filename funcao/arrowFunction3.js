let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

// No caso do node, o objeto global é 'global' e no console do navegador é o 'window'
// Se você estiver usando o this dentro de uma função, tome cuidado que você está usando o this dentro de um escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // O this vai ser restrito apenas para a function arrow
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // O module.exports é onde o this do arrow function é indicado

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // no caso aqui será falso, porque o resultado no arrow Function não muda
comparaComThisArrow(module.exports)