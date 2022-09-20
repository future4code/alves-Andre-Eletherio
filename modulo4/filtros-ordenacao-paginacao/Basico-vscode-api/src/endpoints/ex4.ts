import { Request, Response } from 'express'
import connection from '../connection'

export const getAllUsersAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name || ""
        let sort = req.query.sort;
        let order = req.query.order as string;
        const size = 5;
        let page = Number(req.query.page);

        let type = req.query.type as string
        if (!(type?.toUpperCase() === "TEACHER" || type?.toLocaleUpperCase() === "OPERATIONS" || type?.toLocaleUpperCase() === "CX" || type === undefined)) {
            throw new Error("Invalid type.")
        }
        if (type === undefined) {
            type = ""
        }

        if (sort !== "id" && sort !== "name" && sort !== "email" && sort !== "type") {
            sort = "name"
        }


        if (!(order?.toUpperCase() === "ASC" || order?.toLocaleUpperCase() === "DESC")) {
            order = "DESC"
        }

        if (isNaN(page) || page < 1) {
            page = 1;
        }

        const [users] = await
            connection.raw(`
                SELECT id, name, email, type
                FROM aula49_exercicio
                WHERE name LIKE '%${name}%'
                AND type LIKE '%${type}%'
                ORDER BY ${sort} ${order}
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