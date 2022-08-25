import { Request, Response } from 'express'
import app from './app'
import connection from './connection'

// Exercício 1
// a) A resposta vem em como um array, com dois array dentro. Mas os dados que desejamos acessar encontram-se somente no preimeiro.
// b)
// const searchActor = async (name: string): Promise<any> => {
//     const result = await connection.raw(`
//             SELECT * FROM Actor WHERE name = '${name}';
//         `)
//     return result
// }
// // c)
// const countActors = async (gender: string): Promise<any> => {
//     const [result] = await connection.raw(`
//             SELECT COUNT(*) as "quantity" FROM Actor WHERE gender = '${gender}'
//         `)
//     return result
// }

// Exercício 2
// a)
const changeSalary = async (salary: number, id: string) => {
    await connection("Actor").update(salary).where("id", id)
}
// app.put("/actors/update", async (req: Request, res: Response) => {
//     await connection("Actor").update({ salary: +req.body.salary }).where({ id: req.body.id })
//     res.send("ok")
// })

// app.get("/actors/get", async (req: Request, res: Response) => {
//     const result = await connection("Actor")
//     res.send(result)
// })
// b)
// const deleteActor = async (id: string) => {
//     await connection("Actor").delete().where('id', id)
// }
// app.delete("/actors/delete/:id", async (req: Request, res: Response) => {
//     await connection("Actor").delete().where('id', req.params.id)
//     res.send("OK")
// })
// c)
// const avgSalary = async (gender: string) => {
//     consst [result] = await connection("Actor").avg("salary").where(gender)
//     return result
// }
// app.get("/actors/salaryAvg/:gender", async (req: Request, res: Response) => {
//     const avgSal = await connection("Actor").avg("salary").where("gender", req.params.gender)
//     res.send(avgSal)
// })

// Exercício 3
// a)
// const getActorById = async (id: string) => {
//     return await connection("Actor").where("id", id)
// }
// app.get("/actors/:id", async (req: Request, res: Response) => {
//     try {
//         res.send(await getActorById(req.params.id))
//     } catch (err: any) {
//         res.status(400).send({ message: err.message })
//     }
// })
// b)
// app.get("/actors/gender", async (req: Request, res: Response) => {
//     try {
//         res.send(await countActors(req.query.gender as string))
//     } catch (error: any) {
//         res.status(400).send({message: error.message})
//     }
// })

// Exercício 4
app.put("/actors/updateSalary", async (req: Request, res: Response) => {
    try {
        changeSalary(+req.body.salary, req.body.id)
        res.send("ok")
    } catch (error: any) {
        res.status(400).send({message: error.mesasge})
    }
})