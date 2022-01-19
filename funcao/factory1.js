// O que é uma função factory? É uma funçao que retorna 1 objeto

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Maria'
    }
}

console.log(criarPessoa())