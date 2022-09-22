import express from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'
import { userRouter } from './router/userRouter'
// import dotenv from 'dotenv'
// está dando erro na importação do dotenv
// dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server running in port:${process.env.PORT || 3003}`)
})

app.use("/users", userRouter);