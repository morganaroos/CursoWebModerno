const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  // remove o último elemento
console.log(pilotos)
console.log(pilotos.length)

pilotos.push('Verstappen')  // add um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // add um elemento no início do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionando

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// removendo
pilotos.splice(3, 1)  // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir do índice 1 até o índice 4 sem add o 4
console.log(algunsPilotos2)