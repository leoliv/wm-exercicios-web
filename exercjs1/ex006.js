// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capInic, taxJuros, tempAplic) {
    return capInic + (capInic * taxJuros * tempAplic)
}

function jurosComposto(capInic, taxJuros, tempAplic) {
    return capInic * (1 + taxJuros) ** tempAplic
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));