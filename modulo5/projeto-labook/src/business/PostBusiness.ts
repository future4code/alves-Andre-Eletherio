import { PostDatabase } from "../database/PostDatabase";
import { ICreatePostInputDTO, ICreatPostInputDBDTO, IDeletePostInputDTO, ILikePostInputDBDTO, ILikePostInputDTO, ILikePostLikeInputDBDTO, IPostDB, IPostLike, IRemoveLikeInputDBDTO, IRemoveLikeInputDTO, Post } from "../model/Post";
import { USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
    private authenticator: Authenticator;
    private idGenerator: IdGenerator;
    private postDatabase: PostDatabase;
    constructor(
        authenticator: Authenticator,
        idGenerator: IdGenerator,
        postDatabase: PostDatabase
    ) {
        this.authenticator = authenticator;
        this.idGenerator = idGenerator;
        this.postDatabase = postDatabase;
    }

    public create = async (input: ICreatePostInputDTO) => {
        const { content, token } = input;

        if (!content) {
            throw new Error("Empty content");
        }

        if (!token) {
            throw new Error("Invalid token");
        }

        const user = this.authenticator.getTokenPayload(token);

        if (!user) {
            throw new Error("Invalid token");
        }

        const id = this.idGenerator.generate();

        const inputDB: ICreatPostInputDBDTO = {
            id,
            content,
            user_id: user.id
        }

        this.postDatabase.createPost(inputDB);
        const response = {
            message: "Posted!",
        }

        return response;
    }

    public getPosts = async (token: string) => {
        if (!token) {
            throw new Error("Missing token");
        }

        const user = this.authenticator.getTokenPayload(token);
        if (!user) {
            throw new Error("Invalid token");
        }

        const response = await this.postDatabase.getPosts();

        return response;
    }

    public deletePost = async (input: IDeletePostInputDTO) => {
        const { id, token } = input;

        if (!id || !token) {
            throw new Error("Missing field(s)");
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new Error("Invalid token");
        }

        const post: IPostDB = await this.postDatabase.findById(id);

        if (!post) {
            throw new Error("Post not found");
        }

        if (post.user_id !== payload.id && payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Only admins can delete other users posts");
        }

        const response = await this.postDatabase.deleteById(id);
        return response;
    }

    public like = async (input: ILikePostInputDTO) => {
        const { id, token } = input;

        if (!id || !token) {
            throw new Error("Missing field(s)");
        }

        const postExists: IPostDB = await this.postDatabase.findById(id);

        if (!postExists) {
            throw new Error("Post not found");
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new Error("Invalid token");
        }

        const inputDB: ILikePostInputDBDTO = {
            post_id: id,
            user_id: payload.id
        }

        const isLiked = await this.postDatabase.isLiked(inputDB);
        if (isLiked) {
            throw new Error("Post already liked");
        }

        const post_id: string = this.idGenerator.generate();

        const likeInputDB: ILikePostLikeInputDBDTO = {
            id: post_id,
            post_id: id,
            user_id: payload.id
        }

        const response = await this.postDatabase.like(likeInputDB);
        return response;
    }

    public removeLike = async (input: IRemoveLikeInputDTO) => {
        const {id ,token} = input;

        if (!id || !token) {
            throw new Error("Missing field(s)");
        }

        const postExists: IPostDB = await this.postDatabase.findById(id);

        if (!postExists) {
            throw new Error("Post not found");
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new Error("Invalid token");
        }
        // 
        const inputDB: IRemoveLikeInputDBDTO = {
            post_id: id,
            user_id: payload.id
        }

        const post: IPostLike = await this.postDatabase.isLiked(inputDB);
        if (!post) {
            throw new Error("Post not liked");
        }
        
        const response = await this.postDatabase.removeLike(post);
        return response;
    }
}