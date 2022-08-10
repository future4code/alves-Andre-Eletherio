// Exercicio 3

const tarefas = ["lavar a louça"];
tarefas.push(process.argv[2])
console.log(tarefas)

const fs = require('fs')
const tasks = JSON.parse(fs.readFileSync('./tasks.json'))

tasks.push(process.argv[2])

fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, '\t'))