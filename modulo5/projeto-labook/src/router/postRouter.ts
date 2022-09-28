import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../database/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const postRouter = Router();

const postController = new PostController(
    new PostBusiness(
        new Authenticator(),
        new IdGenerator(),
        new PostDatabase()
    )
);

postRouter.post("/", postController.create);
postRouter.get("/", postController.getPosts);
postRouter.delete("/:id", postController.delete);
postRouter.post("/like/:id", postController.like);
postRouter.delete("/remove-like/:id", postController.removeLike);