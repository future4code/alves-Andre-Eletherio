import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Missing field(s)", 404);
    }
}