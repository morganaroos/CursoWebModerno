const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const china = funcionario => funcionario.pais == 'China'
const mulher = funcionario => funcionario.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    var funcionarios = response.data
    console.log(funcionarios.filter(china).filter(mulher).reduce(menorSalario))
    //console.log(funcionarios)
    
})

