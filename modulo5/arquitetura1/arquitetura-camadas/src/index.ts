import express from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'
// import dotenv from 'dotenv'
// está dando erro na importação do dotenv
// dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server running in port:${process.env.PORT || 3003}`)
})

const userController = new UserController();
app.post("/users/signup", userController.signup);
app.post("/users/login", userController.login);
app.get("/users", userController.getAllUsers);
app.delete("/users/:id", userController.deleteUser);