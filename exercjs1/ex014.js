// 14) ​ Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções. Crie também um default, que retornará uma mensagem de erro no console.

function comprar(fruta) {
    let n = comparar(fruta)
    switch (n) {
        case 1:
            return 'Não vendemos esta fruta aqui'
        case 2:
            return 'Estamos com escassez de kiwis'
        case 3:
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Fruta inválida!'
    }
}

function comparar(fruta) {
    let n = fruta.toLowerCase()
    if (n == 'maçã') {
        return 1
    } else if (n == 'kiwi') {
        return 2
    } else if (n == 'melancia') {
        return 3
    } else {
        return 4
    }
}

let fruta = 'melancia'

console.log(comprar(fruta))