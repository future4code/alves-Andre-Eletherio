import { Request, Response } from 'express'
import connection from '../connection'

export const getAllUsersPages = async (req: Request, res: Response): Promise<void> => {
    try {
        const size = 5;
        let page = Number(req.query.page);
        
        if (isNaN(page) || page < 1) {
            page = 1;
        }
    
        const [users] = await
            connection.raw(`
                SELECT id, name, email, type
                FROM aula49_exercicio
                LIMIT ${size}
                OFFSET ${size * (page - 1)}

       `)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}