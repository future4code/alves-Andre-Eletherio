import { Request, Response } from 'express'
import connection from '../connection'

export const getAllUsersOrdered = async (req: Request, res: Response): Promise<void> => {
    try {
        let sort = req.query.sort;
        let order = req.query.order as string;
        
        if(sort !== "id" && sort !== "name" && sort !== "email" && sort !== "type") {
            sort = "email"
        }
        

        if (!(order?.toUpperCase() === "ASC" || order?.toLocaleUpperCase() === "DESC")){
            order = "ASC"
        }

        const [users] = await
            connection.raw(`
                SELECT id, name, email, type
                FROM aula49_exercicio
                ORDER BY ${sort} ${order}

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