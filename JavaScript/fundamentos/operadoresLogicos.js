function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete  // O "!" muda o valor do comprarSorvete, ou seja, se comprarSoverte for true ele vai ser false e se comprarSorvete for false ele vai ser true

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
