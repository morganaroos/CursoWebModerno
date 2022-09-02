function teste1(num) {
    if(num > 7) 
        console.log(num)
        console.log('Final') // essa sentença não passará pelo if pois o escopo está sem o {}, ele vai ler só a primeira linha
}

//teste1(6)
//teste1(8)

function teste2(num) {
    if(num > 7); {  // cuidade com o ";" , não usar em estruturas de dados
        console.log(num)
    }
    
}

teste2(6)
teste2(8)

