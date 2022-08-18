import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { list } from './data'

let productList = list

const app = express()

app.use(express.json())
app.use(cors())

// Exerxicio 1
app.get("/test", (req: Request, res: Response) => {
    res.send("Funcionando 100%")
})

// Exercicio 3
app.post("/create", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name || !price && price !== 0) {
            res.statusCode = 401
            throw new Error("Nome ou preço não inseridos")
        }

        if (typeof (name) !== 'string') {

            throw new Error('Name deve ser uma string')
        }

        if (typeof (price) !== 'number') {
            throw new Error('Price deve ser um número')
        }

        if (price <= 0) {
            throw new Error("Price não pode ser menor ou igual a 0")
        }

        productList.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })
        res.send(productList)
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})

// Exercicio 4
app.get("/products", (req: Request, res: Response) => {
    const search = req.query.search as string
    if (search) {
        res.send(productList.filter((item) => item.name.includes(search)))
    } else {
        res.send(productList)
    }
})

// Exercicio 5
app.put("/edit", (req: Request, res: Response) => {
    try {
        const { name, id, price } = req.body

        if (!name && !price) {
            throw new Error("Insira name ou price, ou name e price")
        }

        if (price && typeof (price) !== 'number') {
            throw new Error("Price precisa ser um number")
        }

        if (price <= 0) {
            throw new Error("Price precisa ser maior do que 0")
        }

        if (!id) {
            throw new Error("Insira um id")
        }

        if (!productList.find((item) => item.id === id)) {
            throw new Error("Item não encontrado")
        }

        if (name && typeof (name) !== 'string') {
            throw new Error("Name deve ser uma string")
        }

        productList = productList.map((item) => {
            if (item.id === id) {
                if (price) {
                    item.price = price
                }
                if (name) {
                    item.name = name
                }
            }
            return item
        })
        res.send(productList)
    } catch (error: any) {
        res.send({ message: error.message })
    }
})

// Exercicio 6
app.delete("/delete/:id", (req: Request, res: Response) => {
    try {

        if (!productList.find((item) => item.id === req.params.id)) {
            throw new Error("Produto não encontrado")
        }


        productList = productList.filter((item) => item.id !== req.params.id)
        res.send(productList)
    } catch (error: any) {
        res.send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});