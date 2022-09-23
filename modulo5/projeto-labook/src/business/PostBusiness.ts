import { PostDatabase } from "../database/PostDatabase";
import { ICreatePostInputDTO, ICreatPostInputDBDTO, IDeletePostInputDTO, IPostDB, Post } from "../model/Post";
import { USER_ROLES } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
    private authenticator: Authenticator;
    private idGenerator: IdGenerator;
    private postDatabase: PostDatabase;
    constructor(
        authenticator: Authenticator,
        idGenerator: IdGenerator,
        postDatabase: PostDatabase
    ){
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

        if (!user){
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
        if (!token){
            throw new Error("Missing token");
        }

        const user = this.authenticator.getTokenPayload(token);
        if (!user){
            throw new Error("Invalid token");
        }

        const response = await this.postDatabase.getPosts();

        return response;
    }

    public deletePost = async (input: IDeletePostInputDTO) => {
        const {id, token} = input;

        if (!id || !token) {
            throw new Error("Missing field(s)");
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload){
            throw new Error("Invalid token");
        }

        const post: IPostDB = await this.postDatabase.findById(id);
        console.log(post);

        if (!post){
            throw new Error("Post not found");
        }

        if (post.user_id !== payload.id && payload.role !== USER_ROLES.ADMIN){
            throw new Error("Only admins can delete other users posts");
        }
        // verificando se um usuário pode ou não deletar o post com base no seu id
    }
}