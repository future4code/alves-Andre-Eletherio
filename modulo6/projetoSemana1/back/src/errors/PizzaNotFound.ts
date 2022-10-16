import { BaseError } from "./BaseError";

export class PizzaNotFound extends BaseError{
    constructor(){
        super("Pizza not found", 404);
    }
}