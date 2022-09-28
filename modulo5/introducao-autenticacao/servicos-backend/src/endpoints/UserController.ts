import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { MissingFields } from "../error/MissingFields";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import {verifyToken} from '../services/verifyToken'

export class UserController {

    async createUser(req: Request, res: Response) {
        try {
            const {email, password} = req.body;
            if (!email || !password) {
                throw new MissingFields()
            }
            if(!email.includes("@")){
                res.statusCode = 400
                throw new Error("Invalid e-mail.")
            }
            if(password.length < 6){
                throw new Error("Password must contain at least 6 characters")
            }

            const id = generateId();

            await new UserData().insertUser(id, email, password);

            const token = generateToken(id);
            res.send(token);

        } catch (error: any) {
            res.status(400).send({message: error.message});
        }
    }

    async loginUser(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const result = await new UserData().selectUser(email);
            if(!result.length){
                res.statusCode = 400;
                throw new Error("E-mail ou senha inválidos");
            }
            const id = generateId();
            const token = generateToken(id);
            res.send(token);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({message: error.message});
        }
    }

    async ex8(req: Request, res: Response) {
        const token = req.headers.authorization as string;
        const id = verifyToken(token);
        console.log(id);
    }
}