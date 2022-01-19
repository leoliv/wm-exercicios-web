const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angula', { framework: true })

// console.log(tecnologias.react) // Errado! Resultado: undefined
console.log(tecnologias.get('react')) // valor completo; { framework: false }
console.log(tecnologias.get('react').framework) // você pode chamar o valor; false

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // has vai retornar false ou true se o elemento tá ou não contido dentro desse Map
console.log(chavesVariadas.delete(123)) //false ou true para dizer que deletou o elemento
console.log(chavesVariadas.has(123)) // false; elemento não existe
console.log(chavesVariadas.size) // vai dizer quantos elementos existem dentro do Map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
// do lado da chave não pode haver repetição
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)