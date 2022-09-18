import { BaseError } from "./BaseError";

export class EmailExists extends BaseError{
    constructor(){
        super("Email already exists", 400);
    }
}