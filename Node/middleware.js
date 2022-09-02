// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx, next) => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length && 
            middleware[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)


const abc = {}
exec(abc, passo2, passo1, passo3)
console.log(abc)

const teste = {}
exec(teste, passo3, passo1, passo2)
console.log(teste)