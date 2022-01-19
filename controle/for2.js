const notas = [7.8, 3.5, 6.1, 9.5, 5.5]

// O for in vai percorrer pelos index e não pelos valores
// O que recebe é o index e não o valor da nota

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Maria',
    idade: 18,
    peso: 70
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}