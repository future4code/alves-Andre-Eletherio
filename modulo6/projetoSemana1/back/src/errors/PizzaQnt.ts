import { BaseError } from "./BaseError";

export class PizzaQnt extends BaseError{
    constructor(){
        super("Pizza quantity must be greater than 0", 400);
    }
}