require('./global') // Só precisa fazer isso uma vez dentro do arquivo

// Não é obrigado colocar o global.MinhaApp... apesar que daria certo..
console.log(MinhaApp.saudacao())

// Algo global pode ser mudado de qualquer lugar, ISSO É UM PROBLEMA!
// Uma alternativa é usar o freeze
MinhaApp.nome = 'Mudado!'
console.log(MinhaApp.nome)

// Procure trabalhar com a forma padrão do Node, que é com modulos