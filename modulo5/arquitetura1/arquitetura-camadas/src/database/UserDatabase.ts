import { IUserDB, User } from "../model/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users_arq"

    public toIUserDBModel = (user: User) => {
        const iUserDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        return iUserDB;
    }

    public createUser = async (user: User) => {
        const userDB = this.toIUserDBModel(user);

        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
    }

    public findByEmail = async (email: string) => {
        const user = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select("*").where({email});
        return user[0] && User.toUserModel(user[0]);
    }

    public getUsers = async (input: any) => {
        const {name, actualPage, itemsPerPage, sortOrder} = input;
        const usersDB: IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select().where("name", "like", `%${name}%`).orderBy("name", sortOrder).limit(+itemsPerPage).offset(+actualPage - 1);
        return usersDB;
    }
    
    public findById = async (id: string) => {
        const user = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select().where({id});
        return user[0];
    }

    public deleteUser = async (id: string) => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).delete().where({id});
        return `User ${id} deleted`;
    }
}