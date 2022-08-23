import express, { Request, Response } from 'express'
import cors from 'cors'

import { AddressInfo } from 'net'

const app = express()

app.use(express.json())
app.use(cors())

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.NORMAL,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]


// Exercicio 1
// a) Get
// b)
// app.get("/users", (req: Request, res: Response)=> {
//     res.send(users)
// })

// Exercicio 2
// a) Passei por meio de query params, já que passar pelo body não é uma boa prática quando utilizamos o get, e pensei ser uma alternativa melhor que o path param, visto que é facultativo.
// b) Sim, utilizando enum, e validando as entradas.
// app.get("/users", (req: Request, res: Response) => {
//     try {
//         let type: string = req.query.type as string
//         if (type) {
//             if (type === 'admin') {
//                 type = UserType.ADMIN
//             } else if (type === 'normal') {
//                 type = UserType.NORMAL
//             } else {
//                 throw new Error("Invalid type.")
//             }
//             res.send(users.filter((user) => user.type === type))
//         } else {
//             res.send(users)
//         }
//     } catch(error: any) {
//         res.status(404).send({message: error.message})
//     }
// })

// Exercicio 3
// a) Get
// b)
// app.get("/users", (req: Request, res: Response) => {
//     try {
//         let search: string = req.query.search as string
//         if (search) {
//             const filtered: user[] = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
//             if (filtered.length > 0) {
//                 res.send(filtered)
//             } else {
//                 throw new Error("User not found.")
//             }
//         } else {
//             res.send(users)
//         }
//     } catch(error: any) {
//         res.status(404).send({message: error.message})
//     }
// })


// Exercicio 4
// a) Não mudou nada
// b) Não, pois o método "PUT" deve ser utilizado para atualizar elementos, e quando eles não existirem, criá-los. E não para simplesmente criá-los.
app.post("/users", (req: Request, res: Response) => {
    const { id, name, email, type, age } = req.body
    users.push({
        id,
        name,
        email,
        type,
        age
    })
    res.send(users)
})

// Exercicio 5
app.put("/users/:id", (req: Request, res: Response) => {
    users.map((user) => {
        if (user.id === +req.params.id) {
            user.name = user.name + "-ALTERADO"
        }
    })
    res.end()
})


// Exercicio 6
app.patch("/users/:id", (req: Request, res: Response) => {
    users.map((user) => {
        if (user.id === +req.params.id) {
            user.name = user.name + "-Realterado"
        }
    })
    res.end()
})

// Exercicio 7
app.delete("/users/:id", (req: Request, res: Response) => {
    res.send(users.filter((user)=> user.id !== +req.params.id))
})



const server = app.listen(process.env.port || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server")
    }
})