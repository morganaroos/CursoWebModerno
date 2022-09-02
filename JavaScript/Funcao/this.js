// this varia se você usa em uma função normal e 
/* não varia se você usa em uma função arrow */

// this e bind

const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas : funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// this e bind 2.0

function pessoa1() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa1
