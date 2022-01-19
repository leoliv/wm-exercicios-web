// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String - se quebrar em mais de uma linha não dará erro
const produto = 'iPad'
console.log(`${produto} 
é 
caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const [h, , j] = [1, 2, 3]
console.log(h, j)

const { idade: i, nome } = { nome: 'Leo', idade: 9 }
console.log(i, nome)