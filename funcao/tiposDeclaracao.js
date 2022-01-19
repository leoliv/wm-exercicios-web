console.log(soma(4, 3))

// Function declaration
// O interpretador javaScript carregas essas funções antes mesmo de ser declarada em um código
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function (x, y) {
    return x - y
}
// Só pode chamar essa função depois que ela for declarada
console.log(sub(4, 3))

// Named function expression
const mult = function mult(x, y) {
    return x * y
}
// Só pode chamar essa função depois que ela for declarada
console.log(mult(4, 3))