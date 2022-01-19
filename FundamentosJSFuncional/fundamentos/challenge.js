// Create a range function
// range(5) -> [ 1, 2, 3, 4, 5 ]
// range(6, 11) -> [ 6, 7, 8, 9, 10, 11 ]
// range(10, 19, 2) -> [ 10, 12, 14, 16, 18 ]
// range(6, 2) -> [ 6, 5, 4, 3, 2 ]
// range(8, -3, 4) -> [ 8, 4, 0, ]

function range(inic = 0, fim, pass = 1) {
    const array = []
    console.log()
    if (fim == undefined) {
        fim = 1
        for (let i = fim; i <= inic; i += pass) {
            array.push(i)
        }
    } else {
        if (inic < fim) {
            for (let i = inic; i <= fim; i += pass) {
                array.push(i)
            }
        } else {
            if (inic > fim && fim >= 0) {
                pass = -1
                for (let i = inic; i >= fim; i += pass) {
                    array.push(i)
                }
            } else {
                fim = 0
                try {
                    for (let i = inic; i >= fim; i -= pass) {
                        array.push(i)
                    }
                } catch (error) {
                    console.error('Não encontrado') 
                }
            }
        }
    }
    return array
}
console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, -4))