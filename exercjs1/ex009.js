/* 09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. */

// if (nota < 40) {
//     return `Reprovado`
// }

let multiplosDe5 = []
let i = 0
externo: for (let i = 1; i < 100; i++) {
    multiplosDe5.push(5*i)
    for (let y in multiplosDe5) {
        if (multiplosDe5[y] >= 100) {
            break externo;
        }
    }
}

function verificar(x) {
    nota = x
    for (let i in multiplosDe5) {
        if (nota < multiplosDe5[i] && multiplosDe5[i] - nota < 3) {
            nota = multiplosDe5[i]
        }
    }
    if (nota < 40) {
        return `Reprovado com nota ${nota}`
    } else {
        return `Aprovado com nota ${nota}`
    }
    
}


console.log(verificar(100))
console.log(verificar(30))
console.log(verificar(38))
console.log(verificar(88))
console.log(verificar(61))
