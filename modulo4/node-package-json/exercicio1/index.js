const colors = require('colors')

// Exercício 1
// a) Utilizamos "process.argv[index]"

// b)
let argum = process.argv.length
if (argum !== 4) {
    console.log(`São esperados 2 parâmetros. Foram inseridos ${argum - 2}.`)
    return
}

const username = process.argv[2]
const age = +process.argv[3]

console.log(`Olá ${username}! VocE tem ${age} anos. Em sete anos você terá ${age + 7}`.blue)