import { IUserDB, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public static TABLE_USERS = "lama_users";

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const user: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({email})

        return user[0];
    }

    public register = async (input: IUserDB): Promise<void> => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(input)
    }
}