import { Request, Response } from "express";
import { OrderBusiness } from "../business/OrderBusiness";
import { ICreateOrderInputDTO, Order } from "../model/Order";

export class OrderController {
    constructor(
        private orderBusiness: OrderBusiness
    ) { }

    public createOrder = async (req: Request, res: Response) => {
        try {
            const input: ICreateOrderInputDTO = {
                pizzas: req.body.pizzas
            };

            const response = await this.orderBusiness.createOrder(input);

            res.send(response);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }

    public getOrders = async (req: Request, res: Response) => {
        try {
            const response = await this.orderBusiness.getOrders();
            res.send({
                orders: response
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }
}