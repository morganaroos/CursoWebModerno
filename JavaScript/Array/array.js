console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'  // add um novo elemento no índice 3
aprovados.push('Abia')  // add um novo elemento no último índice
console.log(aprovados.length) // mostra quantidade de elementos do array

aprovados[9] = 'Rafael'  // add um novo elemento no índice 9, os índices 5,6,7 e 8 ficaram undefined mas faram parte do array.
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()   // organiza os elementos
console.log(aprovados)

delete aprovados[1]  // deleta o elemento, mas o índice continua no array como undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')   // ('1' apartir desse índice, '2' exclui a quantidade de indice do numero, adiciona novos elementos)
console.log(aprovados)