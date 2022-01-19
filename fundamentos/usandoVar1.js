{
    {
        {
            {
                // A variável var estará visível dentro do bloco e fora dele
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// Já aqui não dará certo porque a variável está visível apenas dentro da função
console.log(local)

// Quando vc cria uma variável fora de uma função essa varival é global. Dentro de Window. Ex.: var a = 123; window.a.
// O node não tem um objeto global window. Faça os testes no browser
