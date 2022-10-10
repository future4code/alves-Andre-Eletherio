import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IUserDB, User, USER_ROLES } from "../../src/models/User"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        switch (email) {
            case "usermocknormal@gmail.com":
                const normalUser: IUserDB = {
                    id: "id-mock-normal",
                    name: "User Mock Normal",
                    email: "usermocknormal@gmail.com",
                    password: "usermocknormal-hash",
                    role: USER_ROLES.NORMAL
                }

                return normalUser;

            case "usermockadmin@gmail.com":
                const adminUser: IUserDB = {
                    id: "id-mock-admin",
                    name: "User Mock Admin",
                    email: "usermockadmin@gmail.com",
                    password: "usermockadmin-hash",
                    role: USER_ROLES.ADMIN

                }
                return adminUser;
            
            default:
                return undefined;
        }
    }

    public createUser = async (user: User): Promise<void> => { }
}