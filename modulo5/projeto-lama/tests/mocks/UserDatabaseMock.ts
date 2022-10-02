import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IUserDB, USER_ROLES } from "../../src/model/User";

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "lama_users";

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        switch (email) {
            case "normalusermock@gmail.com":
                return {
                    id: "id-normal-mock",
                    name: "Normal User Mock",
                    email: "normalusermock@gmail.com",
                    password: "hash-normalusermock",
                    role: USER_ROLES.NORMAL
                }
            case "adminusermock@gmail.com":
                return {
                    id: "id-admin-mock",
                    name: "Admin User Mock",
                    email: "adminusermock@gmail.com",
                    password: "hash-adminusermock",
                    role: USER_ROLES.ADMIN
                }
            default:
                return undefined;
        }
    }

    public register = async (input: IUserDB): Promise<void> => {}
}