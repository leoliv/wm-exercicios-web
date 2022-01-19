function soma(){
    let soma = 0
    for(let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // vai retornar o zero
console.log(soma(1)) // vai retornar o 1
console.log(soma(1.1, 2.2, 3.3)) // vai somar os valores e vai retornar

console.log(soma(1.1, 2.2, 'Teste')) // vai somar os dois primeiros e vai concatenar com a string
console.log(soma('a', 'b', 'c')) // Já que o soma foi inicianda em zero na função, ela irá ser concatenada com as strings passadas