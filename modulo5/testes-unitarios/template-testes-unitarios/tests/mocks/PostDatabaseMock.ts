import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ILikeDB, IPostDB, Post } from "../../src/models/Post"

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => {}

    public getPosts = async (): Promise<IPostDB[]> => {
        const postsDB: IPostDB[] = [
            {
                id: "001",
                content: "Post 1",
                user_id: "id-mock"
            },
            {
                id: "002",
                content: "Post 2",
                user_id: "id-mock"
            }
        ]

        return postsDB
    }

    public getLikes = async (postId: string): Promise<number> => {
        if (postId === "001") {
            return 1;
        }

        return 0;
    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {
        if (postId == "001") {
            return {
                id: "001",
                content: "Post 1",
                user_id: "id-mock"
            };
        }

        return undefined;
    }

    public deletePost = async (postId: string): Promise<void> => {}

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {
        if (postId === "001" && userId === "id-mock") {
            return {
                id: "1",
                post_id: "001",
                user_id: "id-mock"
            };
        }

        return undefined;
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {}

    public removeLike = async (postId: string, userId: string): Promise<void> => {}
}