import { BaseError } from "./BaseError";

export class PassowrdTooShort extends BaseError{
    constructor(){
        super("Password too short. Minimum of 6 characters", 400);
    }
}