import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { USER_ROLES } from '../../src/models/User'

dotenv.config()

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        switch (payload.role) {
            case USER_ROLES.ADMIN:
                return "token-mock-admin"
            default:
                return "token-mock-normal"
        }
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        if(token === "token-mock-admin"){
            return {
                id: "id-mock",
                role: USER_ROLES.ADMIN
            };
        }

        return {
            id: "id-mock",
            role: USER_ROLES.NORMAL
        }
    }
}