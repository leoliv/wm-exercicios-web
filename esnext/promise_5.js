// chanceErro vai receber 1 de 100%; 0 de 0% e 0.5 de 50% 
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('Temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            } 
        } catch (error) {
            reject(error)
        }
        
    })
}

funcionarOuNao('Testando...', 0.6)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        // err => console.log(`Erro esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim'))

// via de regra você coloca o 'catch' no final pra tatar o erro de todos os fluxos