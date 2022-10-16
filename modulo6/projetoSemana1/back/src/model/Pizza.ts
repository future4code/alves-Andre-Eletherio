export class Pizza {
    private name: string;
    private price: string;
    private ingredients: string[]
    constructor(name: string, price: string, ingredients: string[]) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }

    public getName = (): string => {
        return this.name;
    }

    public getPrice = (): string => {
        return this.price;
    }

    public getIngredients = (): string[] => {
        return this.ingredients;
    }

    public addIngredient = (ingredient: string): void => {
        this.ingredients.push(ingredient);
    }
}

export interface PizzaDB {
    name: string,
    price: string,
    ingredient: string
}