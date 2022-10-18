import { OrderDatabase } from "../database/OrderDatabase";
import { EmptyOrder } from "../errors/EmptyOrder";
import { PizzaNotFound } from "../errors/PizzaNotFound";
import { PizzaQnt } from "../errors/PizzaQnt";
import { ICreateOrderInputDTO, ICreateSpecificOrderInputDTO, IGetOrdersDTO, IOrdersFormatted, Order } from "../model/Order";
import { IdGenerator } from "../services/IdGenerator";

export class OrderBusiness {
    constructor(
        private orderDatabase: OrderDatabase,
        private idGenerator: IdGenerator
    ) { }

    public createOrder = async (input: ICreateOrderInputDTO) => {
        const pizzasInput = input.pizzas;

        if (pizzasInput.length == 0) {
            throw new EmptyOrder();
        }

        const pizzas = pizzasInput.map((pizza) => {
            if (pizza.quantity <= 0) {
                throw new PizzaQnt();
            }

            return {
                ...pizza,
                price: 0
            }
        })

        for (let pizza of pizzas) {
            const price = await this.orderDatabase.getPrice(pizza.name);

            if (!price) {
                throw new PizzaNotFound();
            }

            pizza.price = price;
        }

        const order_id = this.idGenerator.generate();

        await this.orderDatabase.createOrder(order_id);

        for (let pizza of pizzas) {
            const input: ICreateSpecificOrderInputDTO = {
                id: this.idGenerator.generate(),
                pizza_name: pizza.name,
                quantity: pizza.quantity,
                order_id: order_id
            }
            await this.orderDatabase.insertIntoOrder(input);
        }

        const totalPrice = pizzas.reduce((tP, pizza) => tP + (pizza.price * pizza.quantity), 0);

        const response = {
            message: "Order created!",
            order: {
                id: order_id,
                pizzas: pizzas,
                total: totalPrice
            }
        };

        return response;
    }

    public getOrders = async () => {
        const orders: IGetOrdersDTO[] = await this.orderDatabase.getOrders();
        
        const ordersArray: IOrdersFormatted[] = []
        for (let order of orders) {
            const orderAlreadyInArray = ordersArray.find((ord)=> ord.id == order.order_id)

            const price = await this.orderDatabase.getPrice(order.pizza_name);
            if (orderAlreadyInArray){

                orderAlreadyInArray.pizzas.push({name: order.pizza_name, quantity: order.quantity, price: price});
                orderAlreadyInArray.total += price;
            } else {
                const newOrder: IOrdersFormatted = {
                    id: order.order_id,
                    pizzas: [{
                        name: order.pizza_name,
                        quantity: order.quantity,
                        price: price
                    }],
                    total: price
                }
                ordersArray.push(newOrder);
            }
        }

        return ordersArray;
    }
}