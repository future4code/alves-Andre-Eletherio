import { ICreatPostInputDBDTO, ILikePostInputDBDTO, ILikePostLikeInputDBDTO, IPostDB, IPostLike } from "../model/Post";
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

    public deleteById = async (id: string) => {
        await BaseDatabase.connection("l_posts").delete().where({id});
        return `Post deleted`;
    }

    public isLiked = async (input: ILikePostInputDBDTO) => {
        const {post_id, user_id} = input;
        const post = await BaseDatabase.connection("l_likes").select().where({post_id}).andWhere({user_id});
        return post[0];
    }

    public like = async (input: ILikePostLikeInputDBDTO) => {
        const {id, post_id, user_id} = input;
        await BaseDatabase.connection("l_likes").insert({id, post_id, user_id});
        return `Post ${post_id} liked by ${user_id}`;
    }

    public removeLike = async (input: IPostLike) => {
        const {id, post_id, user_id} = input;
        await BaseDatabase.connection("l_likes").delete().where({id}).andWhere({post_id}).andWhere({user_id});
        return `Like from post ${id} removed`
    }
}