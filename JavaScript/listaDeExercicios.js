// 7)
function estaEntre3(numero, minimo, maximo, inclusivo) {
    if (inclusivo == true && numero >= minimo && numero <= maximo) {
        console.log(true)
    } else if (numero > minimo && numero < maximo) {
        console.log(true)
    } else {
        console.log(false)
    }
}
estaEntre3(1, 2, 10)
estaEntre3(2, 2, 10)
estaEntre3(7, 2, 10)
estaEntre3(10, 2, 10)
estaEntre3(10, 2, 10, true)

// 8)
function multiplicar(num1, num2) {
    let n = 0
    for(let i = 0; i < num2; i++){
        n = num1 + n
    }
    console.log(n)
}

multiplicar(4, 5)
