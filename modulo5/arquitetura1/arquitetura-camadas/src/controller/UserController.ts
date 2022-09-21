import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const response = await userBusiness.signUp(input);

            res.status(201).send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: any = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness();
            const response = await userBusiness.login(input)

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization;
            const search = req.query.search;
            const page = req.query.page;
            const itemsPage = req.query.itemsPage;
            const order = req.query.order;

            const userBusiness = new UserBusiness();
            const response = await userBusiness.getAllUsers(token, search, page, itemsPage, order);

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const token = req.headers.authorization;

            const userBusiness = new UserBusiness();
            const response = await userBusiness.deleteUser(id, token);

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }
}