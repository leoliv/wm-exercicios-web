// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Corinthians').add('Palmeiras').add('Flamengo')
times.add('Vasco') // não repetirá
console.log(times)
console.log(times.size) // imprimirá o tamanho
console.log(times.has('vasco')) // tem que ser exatamente igual (letras maiúsculas e menúscula) 
console.log(times.has('Vasco')) // true
console.log(times.delete('Flamengo')) // true
console.log(times.has('Flamengo')) // false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] 
const nomeSet = new Set(nomes) // Lucas não será repetido
console.log(nomeSet)