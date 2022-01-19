const schedule = require('node-schedule')

// Essa função recebe como parâmetro uma string de configuração no formato 'segundo minuto hora diaDoMês mês diaDaSemana', que indica quando uma função será executada.

// Na aula, essa string seta a execução do código para um exemplo específico envolvendo o dia e a hora em que a aula foi gravada, que é '/5 * 12 * * 2', o que significa que a função será executada de 5 em 5 segundos, porém apenas durante a hora 12 de uma terça-feira, e se você não estiver testando este exemplo em algum momento em que a hora é 12 em uma terça feira, o código não funcionará.

// Para resolver esse problema, basta mudar a string de configuração. Você pode optar por personalizá-la de acordo com o dia e hora que você está realizando o exercício, ou utilizar a string '/5 * * * * *', que simplesmente executará o código de 5 em 5 segundos independente de minuto, hora, dia do mês, mês e dia da semana em que você está testando o algoritmo.

// se mudar para um horário mais tarde ele irá esperar para depois executar no horário marcado.
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 3', function () {
    console.log('Execultando Tarefa 1', new Date().getSeconds())
})

// Criar uma função para cancelar depois de 20 segundos
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval
// Usando o node-schedule você terá uma flexibilidade muito maior

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 21
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Execultando Tarefa 2', new Date().getSeconds())
})