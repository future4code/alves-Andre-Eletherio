import { ISignUpInputDBDTO, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const userDB = await BaseDatabase.connection("l_users").select().where({ email });
        return userDB[0] && User.toUserModel(userDB[0]);
    }

    public createUser = async (input: ISignUpInputDBDTO) => {
        const {id, name, email, password, role} = input;
        await BaseDatabase.connection("l_users").insert({id, name, email, password, role})
        return `User ${name} created!`;
    }
}