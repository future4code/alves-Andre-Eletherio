import { BaseDatabase } from "./BaseDatabase";

export class PizzaDatabase extends BaseDatabase{

    public getPizzas = async () => {
        const pizzas = await BaseDatabase
            .connection("pizza")
            .select("name", "price", "ingredient")
            .join("ingredients", "ingredients.pizza", "=", "pizza.name")

        return pizzas;
    }
}