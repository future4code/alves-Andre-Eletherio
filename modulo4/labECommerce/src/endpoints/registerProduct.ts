import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function registerProduct(req: Request, res: Response) {
    try {
        const {name, price, image_url} = req.body;
        if (!(name || price || image_url)) {
            throw new Error("Empty field(s)");
        }
        if (+price <= 0 || isNaN(+price)) {
            throw new Error("Price must be a number greater than 0.")
        }
    
        await connection.raw(`
            INSERT INTO labecommerce_products VALUES ('${Date.now()}', '${name}', '${price}', '${image_url}');
        `).then(()=> res.send('ok'))
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}