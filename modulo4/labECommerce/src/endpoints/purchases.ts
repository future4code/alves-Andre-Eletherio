import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function purchases(req: Request, res: Response) {
    try {
        const { user_id, product_id, quantity } = req.body;
        if (!(user_id || product_id || quantity)) {
            throw new Error("Empty field(s)");
        }
        if (+quantity <= 0 || isNaN(quantity)) {
            throw new Error("Invalid quantity")
        }
        const [[price]] = await connection.raw(`
        SELECT price FROM labecommerce_products WHERE id = ${product_id}
    `);
        const total_price = +price.price * +quantity;

        await connection.raw(`
            INSERT INTO labecommerce_purchases VALUES ('${Date.now()}', '${user_id}', '${product_id}', ${quantity}, ${total_price})
        `)
        res.send("ok")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}