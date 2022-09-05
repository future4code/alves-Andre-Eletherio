import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function registerUser(req: Request, res: Response) {
    try {
        const {name, email, password} = req.body
        if (!(name || email || password)) {
            throw new Error("Empty field(s)")
        }
        await connection.raw(`
            INSERT INTO labecommerce_users VALUES ('${Date.now()}', '${name}', '${email}', '${password}')
        `)
        res.send('ok')
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}