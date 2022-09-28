import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {

    public findUserByEmail = async (email: string): Promise<User> => {
        try {
            const user = await BaseDatabase.connection("c_users").select("*").where({ email });
            return user[0] && User.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sql || error.message);
        }
    }

    public createUser = async (user: User) => {
        try {
            await BaseDatabase.connection("c_users").insert(
                {
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                });
        } catch (error: any) {
            throw new Error(error.sql || error.message);
        }
    }

    public findUserById = async (id: string): Promise<User> => {
        try {
            const user = await BaseDatabase.connection("c_users").select("*").where({ id });
            return user[0] && User.toUserModel(user[0]);
        } catch (error: any) {
            throw new Error(error.sql || error.message);
        }
    }

    public followUser = async (followedId: string, followerId: string) => {
        try {
            await BaseDatabase.connection("followers").insert(
                {
                    followed_id: followedId,
                    follower_id: followerId
                });
        } catch (error: any) {
            throw new Error(error.sql || error.message);
        }
    }

    public followeesRecipes = async (followerId: string) => {
        try {
            const [users] = await BaseDatabase.connection.raw(`
            select r.id, r.title, r.description, r.preparation_mode, r.datetime from recipes r
            left join followers f on r.user_id = f.followed_id
            where f.follower_id = "${followerId}"; 
            `);
            return users;
        } catch (error:any) {
            throw new Error(error.sql || error.message);
        }
    }
}