const escola = "Cod3r"

console.log(escola.charAt(4)); // charAt vai dar a posição de um caractere referido ao número no seu parênteses
console.log(escola.charAt(5)); // vai simplismente imprimir nada. JavaScript é uma linguagem relaxada
console.log(escola.charCodeAt(3)); // vai pegar o valor dele dentro da tabela asc ou unicode.
console.log(escola.indexOf('r')); // vai pegar o index relacionado a variavel que se encontra dentro dos parenteses e retornara o index para verdadeiro e -1 quando não houver.
console.log(escola.substring(1)); // vai imprimir apartir do index 1
console.log(escola.substring(0, 3)); // vai do index 0 até o index 3, mas sem pegar o index 3. 

console.log("Escola ".concat(escola).concat("!")); // você pode concatenar.
console.log(escola.replace(3, 'e')); // vai substituir.
console.log('Ana,Maria,Pedro'.split(',')); // vai quebrar esse string em um array