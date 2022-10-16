import { PizzaDatabase } from "../database/PizzaDatabase"
import { Pizza, PizzaDB } from "../model/Pizza";

export class PizzaBusiness {
    private pizzaDatabase: PizzaDatabase;
    constructor(pizzaDatabase: PizzaDatabase) {
        this.pizzaDatabase = pizzaDatabase;
    }

    public getPizzas = async () => {
        const pizzas: PizzaDB[] = await this.pizzaDatabase.getPizzas();

        const pizzasArray: Pizza[] = [];

        for (let rawPizza of pizzas) {
            const pizzaAlreadyExists = pizzasArray.find((pizza) => pizza.getName() == rawPizza.name)

            if (pizzaAlreadyExists) {
                pizzaAlreadyExists.addIngredient(rawPizza.ingredient);
            } else {
                const newPizza = new Pizza(
                    rawPizza.name,
                    rawPizza.price,
                    [rawPizza.ingredient]
                )

                pizzasArray.push(newPizza);
            }
        }

        return pizzasArray;
    }
}