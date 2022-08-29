import { Request, Response } from 'express'
import app from './app'
import connection from './connection'

// app.get("/users", async (req: Request, res: Response) => {
//     res.send(await connection("users"))
// })

// Exercício 1
app.post("/users",async (req: Request, res: Response) => {
    try {
        const {name, nickname, email} = req.body
        if (!name || !nickname || !email) {
            throw new Error("Empty field(s)")
        }
        await connection("users").insert({"id": "004", "name": "jasodf", "nickname": "jaiosdjfio", "email": "oiajdsfidoa"})
        res.send("ok")
    } catch (error: any) {
        res.send({message: error.message})
    }
})

// Exercício 2
// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const [result] = await connection("users").select("id", "name").where({ "id": req.params.id })
//         // Check if user exists
//         if (!result) {
//             throw new Error("User not found.")
//         }
//         console.log(result)
//         res.send(result)
//     } catch (error: any) {
//         res.status(400).send({ message: error.message })
//     }
// })

// Exercício 3
// app.put("/users/edit/:id", async (req: Request, res: Response) => {
//     try {
//         const { name, nickname } = req.body
//         if (!name || !nickname) {
//             throw new Error("Empty field.")
//         }
//         const result = await connection("users").update({ name, nickname }).where({ "id": req.params.id })
//         if (result == 0) {
//             throw new Error("User not found")
//         }
//         res.send("ok")
//     } catch (error: any) {
//         res.status(400).send({ message: error.message })
//     }
// })

// Exercício 4
// app.post("/tasks", async (req: Request, res: Response) => {
//     try {
//         // Check fields
//         const { title, description, limitDate, creatorUserId } = req.body
//         if (!title || !description || !limitDate || !creatorUserId) {
//             throw new Error("Empty Field")
//         }
//         // Convert date
//         const [day, month, year] = limitDate.split('/')
//         const dateYY = new Date(`${year}-${month}-${day}`)
//         await connection("tasks").insert({ "id": Date.now(), title, description, "limitDate": dateYY, creatorUserId })
//         res.send('ok')
//     } catch (error: any) {
//         res.status(400).send({ message: error.message })
//     }
// })

// app.get("/tasks", async (req: Request, res: Response) => {
//     res.send(await connection("tasks"))
// })

// Exercício 5
// app.get("/tasks/:id", async (req: Request, res: Response) => {
//     try {
//         const [result] = await connection("tasks").where("id", req.params.id)

//         // if (!result.length) {
//         //     throw new Error("Task not found")
//         // }
//         console.log(result.id)
//         res.send(result)
//     } catch (error: any) {
//         res.send({message: error.message})
//     }
// })

// Exercício 6
// app.get("/users/all", async (req: Request, res: Response) => {
//   const result = await connection("users")
//   res.send({"users": result})
// })

// app.post("/users/add", async (req: Request, res: Response) => {
//     await connection("users").insert({"id": "003", "name": "aosjdif", "nickname": "aijsdifj", "email": "jaidsjfio@giai.ocamdso"})
//     res.send("ok")
// })

// Exercício 7
// app.get("/tasks", async (req: Request, res: Response) => {
//     try {
//         const userId = req.query.creatorUserId
//         if (!userId) {
//             throw new Error("Insert user")
//         }
//         const result = await connection("tasks").where("creatorUserId", userId)
//         if (!result.length) {
//             throw new Error("User not found")
//         }
//         res.send({"tasks": result})
//     } catch (error: any) {
//         res.send({message: error.message})
//     }
// })

// Execício 8
// app.get("/users",async (req: Request, res: Response) => {
//     try {
//         const query = req.query.query as string
//         if (!query) {
//             throw new Error("Insert query")
//         }
//         const result = await connection("users").select("id", "nickname").where("nickname", "like", query).orWhere("email", "like", query)
//         res.send({"users": [result]})
//     } catch (error: any) {
//         res.send({message: error.message})
//     }
// })

// Exercício 9
// app.post("/tasks/responsible",async (req: Request, res: Response) => {
//         try {
//             const {task_id, responsible_user_id} = req.body
//             if (!task_id || !responsible_user_id) {
//                 throw new Error("Empty field(s)")
//             }
//             await connection("responsible").insert({task_id, responsible_user_id})
//             res.send(await connection("responsible"))
//         } catch (error: any) {
//             res.send({message: error.message})
//         }
//     })

// Exercício 10
// app.get("/tasks/:id/responsible",async (req: Request, res: Response) => {
//     try {
//         const task_id = req.params.id
//         if (!task_id) {
//             throw new Error("User not found")
//         }
//         const result = await connection("users as u").join("responsible as r", function() {
//             this.on('u.id', '=', 'r.responsible_user_id')
//             this.andOnVal("task_id", "=", "1661548663305")
//         }).select("id", "nickname")
//         res.send({"users": result})
//     } catch (error: any) {
//         res.send({message: error.message})
//     }
// })

// Exercício 11
// app.get("/tasks/:id/responsiblesTask",async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         if (!id) {
//             throw new Error("Insert an id")
//         }

//         const [result] = await connection.raw(`
//             SELECT t.id, t.title, t.description, t.limitDate, t.creatorUserId, u.id, u.nickname FROM users u
//             JOIN responsible r ON r.responsible_user_id = u.id AND r.task_id = '1661548663305'
//             JOIN tasks t ON t.id = r.task_id;
//         `)
//         res.send(result)
//     } catch (error: any) {
//         res.send({message: error.message})
//     }
// })
// VOLTAR NO 11






// Exercício 12
// app.put("/task/status/:id",async (req: Request, res: Response) => {
//         try {
//             const id = req.params.id
//             const status = req.body.status
//             if (!id) {
//                 throw new Error("Insert an id")
//             }
//             if (!status) {
//                 throw new Error("Missing field")
//             }

//             await connection("tasks").update("status", status).where("id", id)
//             res.send(await connection("tasks"))
//         } catch (error: any) {
//             res.send({message: error.message})
//         }
//     })

// Exercício 13
// app.get("/task/search", async (req: Request, res: Response) => {
//     try {
//         const status = req.query.status
//         if (!status) {
//             throw new Error("Insert query 'status'")
//         }
//         const result = await connection("status as s").select("t.id as taskId", "t.title", "t.description", "t.limitDate", "t.creatorUserId", "u.nickname as creatorUserNickname").join("tasks as t", function () {
//             this.on('s.task_id', '=', 't.id')
//             this.andOnVal("s.status", "=", status)
//         }).join("users as u", "u.id", "t.creatorUserId")
//                 res.send({ "tasks": result })
//             } catch (error: any) {
//         res.send({ message: error.message })
//     }
// })

// Exercício 14
// app.delete("/tasks/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response) => {
//     try {
//         const { taskId, responsibleUserId } = req.params
//         if (!taskId || !responsibleUserId) {
//             throw new Error("Insert params")
//         }

//         await connection("responsible").delete().where({ "task_id": taskId }).andWhere({ "responsible_user_id": responsibleUserId })
//         res.send("ok")
//     } catch (error: any) {
//         res.send({ message: error.message })
//     }
// })

// Exercício 16
// app.post("/tasks/responsible", async (req: Request, res: Response) => {
//     try {
//         const {task_id, responsible_user_ids} = req.body
//         await connection("responsible").insert({task_id, "responsible_user_id": responsible_user_ids})
//         res.send("ok")
//     } catch (error: any) {
//         res.send({ message: error.message })
//     }
// })

// Exercício 17
// app.get("/tasks", async (req: Request, res: Response) => {
//     try {
//         const term = req.query.query
//         if (!term) {
//             throw new Error("Insert query")
//         }
//         const result = await connection("tasks as t").where("t.title", "like", `%${term}%`).orWhere("t.description", "like", `%${term}%`)
//         res.send(result)
//     } catch (error: any) {
//         res.send({ message: error.message })
//     }
// })

// Exercício 18
app.put("/task/status/edit", async (req: Request, res: Response) => {
        try {
            const {task_ids, status} = req.body
            if (!task_ids || !status) {
                throw new Error("Empty field(s)")
            }
            await connection("status").update({"status": status}).where("task_id", "in", task_ids)
            res.send("ok")
        } catch (error: any) {
            res.send({ message: error.message })
        }
    })

// Exercício 19
// app.delete("/task/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id
//         if (!id) {
//             throw new Error("Insert id")
//         }
        
//         await connection("status").delete().where("task_id", id)
//         await connection("responsible").delete().where("task_id", id)
//         await connection("tasks").delete().where({id})
//         res.send("ok")
//     } catch (error: any) {
//         res.send({ message: error.message })
//     }
// })

// Exercício 20
// app.delete("/user/:id", async (req: Request, res: Response) => {
//         try {
//             const id = req.params.id
//             if (!id) {
//                 throw new Error("Insert id")
//             }
            
//             await connection("responsible").delete().where("responsible_user_id", id)
//             await connection("tasks").delete().where("creatorUserId", id)
//             await connection("users").delete().where("id", id)
//             res.send("ok")
//         } catch (error: any) {
//             res.send({ message: error.message })
//         }
//     })