import { BaseError } from "./BaseError";

export class DuplicatedEntry extends BaseError{
    constructor(){
        super("Duplicated Entry", 409);
    }
}