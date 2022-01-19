// Arrow function
const soma = (a, b) => a + b
console.log(soma(4, 5))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto = 'Node') {
    console.log(texto)
}
log() // 'Node'
log(undefined) // 'Node'
log(null) // null
log('Sou mais forte') // 'Sou mais forte'

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) // 14