// Ex 04
const funcs = []

for(let k = 0; k < 10; k++) {
    funcs.push(function() {
        console.log(k)
    })
}

funcs[2]()
funcs[8]()