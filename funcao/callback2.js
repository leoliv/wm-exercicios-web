const grades = [5.1, 2.6, 7.4, 1.7, 8.8, 9.0, 5.7]

// Sem o callback
let notasBaixas1 = []
for (let i in grades) {
    if (grades[i] < 7) {
        notasBaixas1.push(grades[i])
    }
}

const name = 'Developer'
console.log(`Hello, ${name}`)

console.log(notasBaixas1)

// Com ballback
notasBaixas2 = grades.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

// Com ballback arrowFunction
notasBaixas3 = grades.filter(nota => nota < 7)
console.log(notasBaixas3)

// Com ballback arrowFunction
// deixar o código um pouco mais elegante
const notaMenorQue7 = nota => nota < 7
notasBaixas4 = grades.filter(notaMenorQue7)
console.log(notasBaixas4)
