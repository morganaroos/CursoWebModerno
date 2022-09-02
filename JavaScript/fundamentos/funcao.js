// Função sem retorno
function imprimirSoma1(a, b) {
    console.log(a + b)
}

imprimirSoma1(2, 3)
imprimirSoma1(2)
imprimirSoma1(2, 10, 4, 5, 6, )

// Armazenando uma função em um variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow (reduzida) em uma variável
const soma = (a, b) => {
    return a + b
}

// Retorno Implicito

const subtracao = (a, b) => a - b