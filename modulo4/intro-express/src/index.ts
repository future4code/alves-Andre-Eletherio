import express, {Request, Response} from 'express';
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response)=> {
    res.send("opa")
})

// Exercício 2
type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

// Exercicio 3
let users: User[] = [
    {
        id: 1,
        name: "Jorge",
        phone: "192091090",
        email: "jorge@gmail.com",
        website: "jorge.com.br"
    },
    {
        id: 2,
        name: "Tony Stark",
        phone: "1239283829",
        email: "tonynho@gmail.com",
        website: "tony.com.br"
    },
    {
        id: 3,
        name: "Peter Parker",
        phone: "123928390",
        email: "peteromiranha@gmail.com",
        website: "peter.com.br"
    }
]

// Exercicio 4
app.get("/users", (req: Request, res: Response)=> {
    res.send(users)
})

// Exercicio 5
type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// Exercicio 6
let posts: Post[] = [
    {
        userId: 1,
        id: 1,
        title: "Burguesinha",
        body: "Burguesinha, burguesinha, burguesinha, burguesinha, burguesinha."
    },
    {
        userId: 1,
        id: 2,
        title: "Tive Razão",
        body: "Tive razão, posso falar."
    },
    {
        userId: 2,
        id: 3,
        title: "Eu sou o Homem de Ferro",
        body: "Eu sou o Homem de Ferro, a armadura e eu somos um."
    },
    {
        userId: 3,
        id: 4,
        title: "Vendo fotos do miranha",
        body: "Vendo fotos do miranha, por um preço bacana."
    }
]
// Talvez seja melhor criar dentro do array de usuários, pois ficaria mais fácil de filtrar, mas por outro lado, demoraria mais tempo para carregar as informações.

// Exercicio 7
app.get("/posts", (req: Request, res: Response)=> {
    res.send(posts)
})

// Exercicio 8
app.get("/posts/:userId", (req: Request, res: Response)=> {
    const postsFiltered = posts.filter((item)=>item.userId === +req.params.userId)
    res.send(postsFiltered)
})

// Exercicio 9
app.delete("/posts/:id", (req: Request, res: Response)=> {
    posts = posts.filter((item)=>item.id !== +req.params.id)
    res.end()
})

// Exercicio 10
app.delete("/users/:userId", (req: Request, res: Response)=> {
    users = users.filter((item)=>item.id !== +req.params.userId)
    posts = posts.filter((item)=>item.userId !== +req.params.userId)
    res.end()
})

app.listen(3003, ()=> {
    console.log("Server is running in https://localhost:3003")
})