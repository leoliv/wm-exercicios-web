const sequencia = {
    _valor1: 1, // convenção - para dizer que esse atributo é privado e não pode ser mexido diretamente
    get valor() { return this._valor1++ },
    set valor(valor) {
        if (valor > this._valor1) {
            this._valor1 = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia._valor1 = 2222
console.log(sequencia.valor, sequencia.valor)