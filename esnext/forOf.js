for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise']

// forIn percorre em cima de indices
for (let i in assuntoEcma) {
    console.log(i)
}

// forOf percorre em cima de valores
for (let assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}

// percorrer só as chaves
for (let chave of assuntoMap.keys()) {
    console.log(chave)
}

// percorrer só os valores
for (let valor of assuntoMap.values()) {
    console.log(valor)
}

// Tambem pode fazer uma destructuring 'Destruturação', tirando do array
for ([ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl)
}

// Percorrendo o set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}