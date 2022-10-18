import { ICreateSpecificOrderInputDTO, IGetOrdersDTO } from "../model/Order";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase{

    public getPrice = async (name: string) => {
        const price =  await BaseDatabase
            .connection("pizza")
            .select("price")
            .where({name})
        return price && price[0].price as number;
    }

    public createOrder = async (id: string)=> {
        await BaseDatabase
            .connection("orders")
            .insert({id})
    }

    public insertIntoOrder = async (input: ICreateSpecificOrderInputDTO) => {
        await BaseDatabase
            .connection("specific_order")
            .insert(input)
    }

    public getOrders = async () => {
        const response: IGetOrdersDTO[] = await BaseDatabase
            .connection("orders")
            .select("order_id", "pizza_name", "quantity")
            .join("specific_order", "specific_order.order_id", "=", "orders.id")
        return response;
    }

    public getOrderItems = async (id: string) => {
        const response = await BaseDatabase
            .connection("specific_order")
            .select()
            .where({id})
        return response;
    }
}