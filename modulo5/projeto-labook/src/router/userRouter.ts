import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { PostController } from "../controller/PostController";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const userRouter = Router();

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new IdGenerator(),
        new Authenticator()
    )
);

userRouter.post("/signup", userController.signUp);
userRouter.post("/login", userController.login);