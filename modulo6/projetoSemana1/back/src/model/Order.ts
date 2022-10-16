export class Order {
    constructor(
        private id: string,
        private orderItems: IOrderItem[]
    ) { }

    public getId = () => {
        return this.id;
    }

    public setOrderItems = (orderItems: IOrderItem[]) => {
        this.orderItems = orderItems;
    }
}

export interface IOrderItem {
    id: string,
    pizza_name: string,
    price: number,
    quantity: number,
    order_id: string
}

export interface ICreateOrderInputDTO {
    pizzas: {
        name: string,
        quantity: number
    }[]
}

export interface ICreateSpecificOrderInputDTO {
    id: string,
    pizza_name: string,
    quantity: number,
    order_id: string
}

export interface IGetOrdersDTO {
    order_id: string,
    pizza_name: string,
    quantity: number,

}

export interface IOrdersFormatted {
    id: string,
    pizzas: {
        name: string,
        quantity: number,
        price: number,
    }[],
    total: number
}