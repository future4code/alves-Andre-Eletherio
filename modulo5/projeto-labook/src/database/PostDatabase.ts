import { ICreatPostInputDBDTO, IPostDB } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    public createPost = async (input: ICreatPostInputDBDTO) => {
        const {id, content, user_id} = input;
        await BaseDatabase.connection("l_posts").insert({id, content, user_id});
    }

    public getPosts = async () => {
        const posts: IPostDB[] = await BaseDatabase.connection("l_posts").select();
        return posts;
    }

    public findById = async (id: string) => {
        const post: IPostDB[] = await BaseDatabase.connection("l_posts").select().where({id});
        return post[0];
    }
}