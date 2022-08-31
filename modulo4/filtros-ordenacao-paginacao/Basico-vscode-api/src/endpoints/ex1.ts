import { Request, Response } from 'express'
import connection from '../connection'

// a)
export const getAllUsersByName = async (req: Request, res: Response): Promise<void> => {
   try {
      const name = req.query.name || ""

      const [users] = await
         connection.raw(`
            SELECT id, name, email, type
            FROM aula49_exercicio
            WHERE name LIKE '%${name}%'
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

// b)

export async function getAllUsersByType(req: Request, res: Response): Promise<any> {
   try {
      let type = req.query.type as string
      if (!(type?.toUpperCase() === "TEACHER" || type?.toLocaleUpperCase() === "OPERATIONS" || type?.toLocaleUpperCase() === "CX" || type === undefined)) {
         throw new Error("Invalid type.")
      }
      if (type === undefined) {
         type = ""
      }
      const [users] = await 
         connection.raw(`
            SELECT id, name, email, type
            FROM aula49_exercicio
            WHERE type LIKE '%${type}%'
         `)

      res.status(200).send(users)
   } catch (error: any) {
      res.status(400).send({message: error.message} || "Internal server error")
   }
}