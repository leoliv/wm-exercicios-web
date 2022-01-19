// 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function triangulo(x,y,z){
    if (x === y && x === z) {
        return 'São Equiláteros'
    } else if (x === y && x !== z || x === z && x !== y || z === y && z !== x) {
        return 'São Isósceles'
    } else {
        return 'São Escalenos'
    }
}

console.log(triangulo(2,3,4))
console.log(triangulo(3,3,4))
console.log(triangulo(4,3,4))
console.log(triangulo(3,4,4))
console.log(triangulo(4,4,3))
console.log(triangulo(4,4,4))
console.log(triangulo(43,43,43))
console.log(triangulo(1,5,9))