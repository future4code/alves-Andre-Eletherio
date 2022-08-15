// Exercicio 2

const x = +process.argv[3]
const y = +process.argv[4]

let result;

switch (process.argv[2]) {
    case "add":
        result = x + y
        break
    case "sub":
        result = x - y
        break
    case 'mult':
        result = x * y
        break
    case 'div':
        result = x / y
        break
}

console.log(result)