import { BaseError } from "./BaseError";

export class EmptyOrder extends BaseError{
    constructor(){
        super("Insert at least 1 pizza", 400);
    }
}