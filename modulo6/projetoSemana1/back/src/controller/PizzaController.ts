import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";

export class PizzaController {
    private pizzaBusiness: PizzaBusiness;
    constructor(pizzaBusiness: PizzaBusiness) {
        this.pizzaBusiness = pizzaBusiness;
    }

    public getPizzas = async (req: Request, res: Response) => {
        try {
            const pizzas = await this.pizzaBusiness.getPizzas();
            res.send(pizzas);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }
}