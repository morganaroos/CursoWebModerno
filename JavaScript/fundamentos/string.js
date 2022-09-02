const escola = 'Cod3r'

console.log(escola.charAt(4)) // mostrar o 4 elemento da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // mostrar qual o código do 3 elemento em uma tabela estranha
console.log(escola.indexOf('3')) // buscou se tinha o 3 na string e retornou a posição dela

console.log(escola.substring(1)) // mostrou a string a partir da posição 1
console.log(escola.substring(0, 3)) // mostrou a string a partir da posição 1 até a posição 3, sem incluir a 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola '  + escola + '!')
console.log(escola.replace(3, 'e')) // substitui o texto 3 por e

console.log('Ana,Maria,Pedro'.split(',')) // cria um array separados pela virgula



