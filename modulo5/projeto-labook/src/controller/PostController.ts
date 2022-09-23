import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInputDTO, IDeletePostInputDTO, ILikePostInputDTO, IRemoveLikeInputDTO } from "../model/Post";

export class PostController {
    private postBusiness: PostBusiness;
    constructor(
        postBusiness: PostBusiness
    ) {
        this.postBusiness = postBusiness;
    }

    public create = async (req: Request, res: Response) => {
        try {

            const input: ICreatePostInputDTO = {
                content: req.body.content,
                token: req.headers.authorization as string
            }

            const response = await this.postBusiness.create(input);
            res.send(response);

        } catch (error: any) {
            res.status(res.statusCode).send({ message: error.message });
        }
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const response = await this.postBusiness.getPosts(token);
            res.send(response);

        } catch (error: any) {
            res.status(res.statusCode).send({ message: error.message });
        }
    }

    public delete = async (req: Request, res: Response) => {
        try {
            const input: IDeletePostInputDTO = {
                id: req.params.id,
                token: req.headers.authorization as string
            }

            const response = await this.postBusiness.deletePost(input);
            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode).send({ message: error.message });
        }
    }

    public like = async (req: Request, res: Response) => {
        try {
            const input: ILikePostInputDTO = {
                id: req.params.id,
                token: req.headers.authorization as string
            }

            const response = await this.postBusiness.like(input);
            res.send(response);

        } catch (error: any) {
            res.status(res.statusCode).send({message: error.message});
        }
    }

    public removeLike = async (req: Request, res: Response) => {
        try {
            const input: IRemoveLikeInputDTO = {
                id: req.params.id,
                token: req.headers.authorization as string
            }

            const response = await this.postBusiness.removeLike(input);
            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode).send({message: error.message});
        }
    }
}