import express, { Request, Response } from 'express'
import cors from 'cors'
import { Extract } from './types'
import { dataBase } from './dataBase'

const app = express()

app.use(express.json())
app.use(cors())

function resError(res: any, error: any) {
    if (res.statusCode == 200) {
        res.status(500).send(error.message)
    } else {
        res.status(res.statusCode).send(error.message)
    }
}

// Create account
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDateDD } = req.body

        // Check fields
        if (!name || !cpf || !birthDateDD) {
            throw new Error("Missing field(s)")
        }

        // Validate age
        const [day, month, year] = birthDateDD.split('/')
        const birthDateYY: Date = new Date(`${year}-${month}-${day}`)

        const dayN: number = new Date().getDate()
        const monthN: number = new Date().getMonth() + 1
        const yearN: number = new Date().getFullYear()

        function sendAgeError() {
            res.statusCode = 406
            throw new Error("User age must be 18+")
        }

        if (yearN - year < 18) {
            sendAgeError()
        } else if (yearN - year === 18) {
            if (monthN - month < 0) {
                sendAgeError()
            } else if (monthN - month === 0) {
                if (dayN - day < 0) {
                    sendAgeError()
                }
            }
        }

        // Check CPF
        if (dataBase.find((acc) => acc.cpf === cpf)) {
            res.statusCode = 409
            throw new Error("CPF already exists")
        }

        dataBase.push({
            name,
            cpf,
            birthDate: birthDateYY,
            balance: 0,
            spending: []
        })

        res.status(201).send("Created succefully")
    } catch (error: any) {
        resError(res, error)
    }
})


// Get Users
app.get("/users", (req: Request, res: Response) => {
    try {
        if (!dataBase.length) {
            res.statusCode = 404
            throw new Error("No account found")
        }

        res.send(dataBase)
    } catch (error: any) {
        resError(res, error)
    }
})


// Get balance
app.get("/users/balance", (req: Request, res: Response) => {
    try {
        const { cpf } = req.query
        const account = dataBase.find((acc) => acc.cpf == cpf)
        if (!account) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.send({ balance: account.balance })
    } catch (error: any) {
        resError(res, error)
    }
})


// Add money
app.post("/users/balance/change", (req: Request, res: Response) => {
    try {
        const { name, cpf, value } = req.body

        // Check fields
        if (!name || !cpf || !value) {
            throw new Error("Missing field(s)")
        }

        const user = dataBase.find((acc) => acc.cpf == cpf)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        user.spending.push({
            value: +value,
            date: new Date(),
            description: "Depósito de dinheiro"
        })

        res.send("Success")
    } catch (error: any) {
        resError(res, error)
    }
})


// Pay
app.post("/users/pay", (req: Request, res: Response) => {
    try {
        const { value, description, cpf } = req.body
        let { payDate } = req.body

        if (!payDate) {
            payDate = Date.now()
        }

        const [day, month, year] = payDate.split('/')
        const payDateYY = new Date(`${year}-${month}-${day}`)

        // Check Fields
        if (!value || !description || !cpf) {
            res.statusCode = 400
            throw new Error("Missing field(s)")
        }

        const user = dataBase.find((acc) => acc.cpf == cpf)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        if (+value > user.balance) {
            res.statusCode = 401
            throw new Error("Not enough money")
        }

        user.spending.push({
            value: -(+value),
            date: payDateYY,
            description: description
        })

        res.send(dataBase)

    } catch (error: any) {
        resError(res, error)
    }
})


// Internal Transfer
app.patch("/users/internalTransfer", (req: Request, res: Response) => {
    const { name, cpf, desName, desCpf, value } = req.body
    let foundU1: boolean = false
    let foundU2: boolean = false

    // Check Fields
    if (!name || !cpf || !desName || !desCpf || !value) {
        res.statusCode = 400
        throw new Error("Missing field(s)")
    }

    dataBase.map((acc) => {
        if (acc.cpf === cpf && acc.name === name) {
            // Validate value
            if (+value > acc.balance) {
                throw new Error("Not enough money")
            }
            // acc.balance -= +value
            acc.spending.push({
                value: -(+value),
                description: "Envio de transferência interna",
                date: new Date
            })
            foundU1 = true
        } else if (acc.name === desName && acc.cpf === desCpf) {
            // acc.balance += +value
            acc.spending.push({
                value: +value,
                description: "Recebimento de transferência interna",
                date: new Date
            })
            foundU2 = true
        }
    })

    if (!foundU1 && !foundU2) {
        throw new Error("User(s) not found")
    }

    res.send(dataBase)
})

// Get Balance by Cpf
app.get("/users/balance/cpf", (req: Request, res: Response) => {
    try {
        dataBase.map((acc) => {
            if (acc.cpf === req.query.cpf) {
                res.send({ balance: acc.balance })
            }
        })
        throw new Error("User not found")
    } catch (error: any) {
        res.send({ message: error.message })
    }
})


// Update Balance
app.put("/users/update", (req: Request, res: Response) => {
    try {
        dataBase.map((acc) => {
            let transfers: number = 0;
            acc.spending.map((spe) => {
                transfers += spe.value
            })
            acc.balance += transfers
            acc.spending = []
        })
        res.send(dataBase)
    } catch (error: any) {
        resError(res, error)
    }
})

const server = app.listen(3003, () => {
    console.log('Server is running in hhtp://localhost:3003')
})