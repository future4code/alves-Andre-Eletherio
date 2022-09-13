import { BaseError } from "./BaseError";

export class ModuloError extends BaseError{
    constructor(){
        super("Modulo must be between 0 and 6.", 422);
    }
}