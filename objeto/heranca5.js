console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// Os três tem um atributo chamado, .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5, 6, 7].first())
console.log(['A', 'B', 'C'].first())

// Substituir uma função que ja existe num prototype
// Aqui está sobrescrevendo o comportamento do toString. Isso vai gerar problemas. NÃO SUBSTITUA comportamentos que na exista na forma global. NÃO SUBSTITUA METODOS QUE JA ESTEJAM DISPONIVEIS NO PROTOTIPO.
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())