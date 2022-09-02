function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebool', 2199.40))

console.log(criarProduto('iPad', 1199.40))
