let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // retunr implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}
console.log(ola())

ola = () => 'Olá'
ola = _ => 'Olá' // Não é errado, mas não é bonito ( _ é um parametro)
console.log(ola())
