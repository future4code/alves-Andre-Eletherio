export class Post {
    private id: string;
    private content: string;
    private user_id: string;
    private likes: number;
    constructor(
        id: string,
        content: string,
        user_id: string,
        likes: number,
    ) {
        this.id = id;
        this.content = content;
        this.user_id = user_id;
        this.likes = likes;
    }

    static toPostModel = (input: any): Post => {
        return new Post(input.id, input.content, input.user_id, input.likes);
    }

    public getId = () => {
        return this.id;
    }
    public getContent = () => {
        return this.content;
    }
    public getUser_id = () => {
        return this.user_id;
    }
    public getLikes = () => {
        return this.likes;
    }
}

export interface ICreatePostInputDTO {
    content: string,
    token: string
}

export interface ICreatPostInputDBDTO {
    id: string,
    content: string,
    user_id: string
}

export interface IPostDB {
    id: string,
    content: string,
    user_id: string
}

export interface IDeletePostInputDTO {
    id: string,
    token: string
}

export interface ILikePostInputDTO {
    id: string,
    token: string
}

export interface ILikePostInputDBDTO {
    post_id: string,
    user_id: string
}

export interface ILikePostLikeInputDBDTO {
    id: string,
    post_id: string,
    user_id: string
}

export interface IRemoveLikeInputDTO {
    id: string,
    token: string
}

export interface IRemoveLikeInputDBDTO {
    post_id: string,
    user_id: string
}

// export interface IRemoveLikeInput

export interface IPostLike {
    id: string,
    post_id: string,
    user_id: string
}