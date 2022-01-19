// 13) ​ Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function semanal(n) {
    switch (n) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('Dia útil')
            break
        case 6:
            console.log('Fim de semana')
            break
        case 7:
            console.log('Shabat')
            break
        default:
            console.log('Dia Inválido!')
            break;
    }
}

semanal(2)
semanal(5)
semanal(6)
semanal(9)
semanal(7)