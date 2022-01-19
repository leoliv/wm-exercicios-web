// 04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const divisor = (dividendo, divisor) => console.log(`A divisão entre ${dividendo} e ${divisor} é ${Math.floor(dividendo / divisor)}\nO resto é ${dividendo % divisor}`)

divisor(10, 5)
divisor(10, 3)