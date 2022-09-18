import * as jwt from "jsonwebtoken";
import { BaseDatabase } from "../data/BaseDatabase";

export interface AuthenticationData {
    id: string
}

export class Authenticator extends BaseDatabase {

    public generateToken = (payload: AuthenticationData) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        )
        return token;
    }

    public getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string)
        return payload as AuthenticationData;
    }
}