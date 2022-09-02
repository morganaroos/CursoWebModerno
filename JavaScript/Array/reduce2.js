const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas? 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Defafio 2: Algum aluno é bolsista?
const bolsistas = (resltado, bolsista) => resltado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsistas))