// Anonymous function
// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
    let x = 3
    console.log(`Result ${a + b + c}`)
    console.log(x)
})(1, 2, 3); // é obrigatório ter o ponto e virgula

(function (a, b, c) {
    let x = 300
    console.log(`Result ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();