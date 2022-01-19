console.log(this === global) // false! Porque this aponta para module.exports
console.log(this === module) // false! Porque this é um objeto, que exatemente a referencia de module.exports
console.log(this === module.exports) // true! Porque this aponta para module.exports
console.log(this === exports) // true! Porque exports aponsta para a mesma referencia, mesmo objeto

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // dentro de uma função o 'This' não aponta para exports, mas fora aponta
    console.log(this === module.exports) // false também; Ja que para exports, que é a mesma referencia não aponta, também para module.exports não apontará

    // This aponta para 'Global' dentro de uma função
    console.log(this === global)

    // Agora fazer isso...
    // this.perigo = '...' // você está fazendo dentro de escopo global
}
logThis()