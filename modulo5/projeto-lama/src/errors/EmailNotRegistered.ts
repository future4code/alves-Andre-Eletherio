import { BaseError } from "./BaseError";

export class EmailNotRegistered extends BaseError {
    constructor() {
        super("Email not registered", 404);
    }
}