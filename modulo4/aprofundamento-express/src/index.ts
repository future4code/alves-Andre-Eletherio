import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

const fs = require('fs')
const tasks = JSON.parse(fs.readFileSync('src/tasks.json'))

app.use(express.json())
app.use(cors())

// Exercicio 1
app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
})

// Exercicio 2
type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercicio 3
let toDoList = [
    {
        userId: 1,
        id: 1,
        title: "Comer arroz",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Comer feijão",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "Comer bife",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Ir à academia",
        completed: false
    },
    {
        userId: 2,
        id: 5,
        title: "Cortar o cabelo",
        completed: false
    },
    {
        userId: 2,
        id: 6,
        title: "Comprar televisão",
        completed: false
    },
    {
        userId: 3,
        id: 7,
        title: "Comprar telefone fixo",
        completed: false
    },
    {
        userId: 3,
        id: 8,
        title: "Comprar pratos",
        completed: false
    },
    {
        userId: 3,
        id: 9,
        title: "Doar camisa",
        completed: false
    }
]

// Exercicio 4
app.get("/todo/:completed", (req: Request, res: Response) => {
    let completed = req.params.completed
    let bool: boolean = true;
    if (completed == 'false') {
        bool = false
    }
    const filteredList = toDoList.filter((item) => item.completed === bool)
    res.send(filteredList)
})

// Exercicio 5
app.post("/todo/add", (req: Request, res: Response) => {
    const { userId, id, title, completed } = req.body
    tasks.push({
        userId: userId,
        id: id,
        title: title,
        completed: completed
    })
    fs.writeFileSync('src/tasks.json', JSON.stringify(tasks, null, '\t'))
    res.send(tasks)
})

// Exercicio 6
app.put("/todo/edit/:id", (req: Request, res: Response) => {
    toDoList = toDoList.map((item) => {
        if (item.id === +req.params.id) {
            item.completed = !item.completed
        }
        return item
    })
    res.send(toDoList)
})

// Exercicio 7
app.delete("/todo/delete/:id", (req: Request, res: Response) => {
    toDoList = toDoList.filter((item)=> item.id !== +req.params.id)
    res.send(toDoList)
})

// Exercicio 8
app.get("/todo/user/:userId", (req: Request, res: Response)=> {
    res.send({
        todos: {
            selectedUser: [
                toDoList.filter((item)=>item.userId === +req.params.userId)
            ],
            others: [
                toDoList.filter((item)=>item.userId !== +req.params.userId)
            ]
        }
    })
})

app.listen(3003, () => {
    console.log("Server is running in http:localhost:3003")
})