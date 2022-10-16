import { USER_ROLES } from "../../src/model/User";

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        if (payload.role === USER_ROLES.ADMIN) {
            return "token-admin-mock"
        }

        return "token-normal-mock"
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        if (token == "token-admin-mock") {
            return {
                id: "id-admin-mock",
                role: USER_ROLES.ADMIN
            }
        } else if (token == "token-normal-mock") {
            return {
                id: "id-normal-mock",
                role: USER_ROLES.NORMAL
            }
        }
        return null;
    }
}