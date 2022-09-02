function MeuObjetoF() {}
console.log(MeuObjetoF.prototype)
console.log(MeuObjetoF.__proto__)

const obj1 = new MeuObjetoF
const obj2 = new MeuObjetoF
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__)
console.log(MeuObjetoF.prototype === obj1.__proto__)

MeuObjetoF.prototype.nome = 'Anônimo'
MeuObjetoF.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafaela'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjetoF.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura... (acabou ficando mais louco)
console.log((new MeuObjetoF).__proto__ === MeuObjetoF.prototype)
console.log(MeuObjetoF.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


