// 1)
const cumprimentar = function(pessoa) {
    return (`Olá ${pessoa} !`)
}

console.log(cumprimentar('Marcia'))

// 2)
const idadeEmAnos = function(idade) {
    return idade * 365
}

console.log(idadeEmAnos(25))

// 3)
const calcularSalario = function(horasTrabalhadas, valorDaHora) {
    const calculoSalario = horasTrabalhadas * valorDaHora
    return (`Salário igual a R$${calculoSalario},00`)

}
console.log(calcularSalario(188, 60))

// 4)

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const retornarMese = function(numero) {
    return meses[numero - 1]
}

console.log(retornarMese(1))

// 5)
function mairOuIgual(x, y) {
    if (x >= y) {
        console.log('true')
    } else {
        console.log('false')
    }
}

mairOuIgual(1,0)

// 6)
function inverso(num) {
  
    if(typeof num == 'boolean') {
      console.log(!num)
    } else if(typeof num == 'number') {
        console.log(-num)
     } else {
        console.log(`Booleano ou número esperados, mas o parâmetro é do tipo ${typeof num}`)
    }
}


//inverso('5')