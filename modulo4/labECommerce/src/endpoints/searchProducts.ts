import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function searchProducts(req: Request, res: Response) {
    const result = await connection("labecommerce_products")
    res.send(result)
}