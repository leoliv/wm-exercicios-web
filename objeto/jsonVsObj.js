const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // esse método converte obj em JSON

// console.log(JSON.parse("{ a: 1, b: 2, C: 3}"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'C': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "C": 3}'))

// Qualquer texto dentro de um JSON tem que ta delimitado por aspas duplas
console.log(JSON.parse('{ "a": 1.3, "b": "String", "c": true, "d": {}, "e": [] }'))

// Não pode ter funções dentro do JSON