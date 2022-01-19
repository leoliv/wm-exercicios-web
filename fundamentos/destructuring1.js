// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 30,
    endereco: {
        logradoura: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradoura, numero, cep} } = pessoa
console.log(logradoura, numero, cep)