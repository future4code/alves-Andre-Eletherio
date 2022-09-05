import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function searchUsers (req: Request, res: Response) {
    const user = await connection

    const [purchases] = await connection.raw(`
        SELECT pro.name, pro.price, pur.quantity, pur.total_price, pro.image_url FROM labecommerce_users u
        JOIN labecommerce_purchases pur
        ON u.id = pur.user_id
        JOIN labecommerce_products pro
        ON pro.id = pur.product_id;
    `)
    res.send(purchases)
}