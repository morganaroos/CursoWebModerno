// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))  // mostra os valores do obj em um array
console.log(Object.entries(obj))  // mostra as chaves e os valore do obj em array

// Melhoria na Notação Literal do Obj
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachoro extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Cachoro().falar())
