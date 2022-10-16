import { Router } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { PizzaController } from "../controller/PizzaController";
import { PizzaDatabase } from "../database/PizzaDatabase";

export const pizzaRouter = Router();

const pizzaController = new PizzaController(
    new PizzaBusiness(
        new PizzaDatabase()
    )
);

pizzaRouter.get("/pizzas", pizzaController.getPizzas);