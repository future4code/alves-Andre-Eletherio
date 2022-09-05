import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function searchPurchases(req: Request, res: Response) {
    const user_id = req.params.user_id;
    let sort: string = req.query.sort as string;
    let order: string = req.query.order as string;
    let search: string = req.query.search as string;

    if (!(sort?.toLowerCase() === 'name' || sort?.toLowerCase() === 'price' || sort?.toLowerCase() === 'quantity' || sort?.toLowerCase() === 'total_price')) {
        sort = 'name'
    }

    if (!(order.toLowerCase() === "asc" || order?.toLowerCase() === "desc")) {
        order = "adc"
    }

    if (!search) {
        search = ""
    }

    const [result] = await connection.raw(`
        SELECT pro.name, pro.price, pur.quantity, pur.total_price, pro.image_url FROM labecommerce_purchases pur
        JOIN labecommerce_products pro
        ON pur.product_id = pro.id
        WHERE user_id = ${user_id} AND pro.name LIKE "%${search}%"
        ORDER BY ${sort} ${order};
    `)
    res.send(result);
}