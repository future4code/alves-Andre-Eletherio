import { BaseError } from "./BaseError";

export class BuyLimit extends BaseError {
    constructor() {
        super("A user can only buy one ticket", 400);
    }
}