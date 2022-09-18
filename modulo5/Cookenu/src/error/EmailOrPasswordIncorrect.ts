import { BaseError } from "./BaseError";

export class EmailOrPasswordIncorrect extends BaseError{
    constructor(){
        super("Email or password incorrect", 422);
    }
}