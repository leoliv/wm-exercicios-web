console.log(7/0); // Qualquer número dividido por zero, não vai dar um erro, vai dar Infinity
console.log("10"/2); // sintomas da tipagem fraca.
console.log("3" + 2); // não vai somar, e sim concatenar por que a string tem preferencia
console.log("3" - 2); // nesse caso vai subtrair.
console.log("Show!" * 2); // Essa não vai funcionar
console.log(0.1 + 0.7);
// console.log(10.toString()); // vai dar errado 
console.log(10.345.toFixed(2)); // Mas aqui dará certo.