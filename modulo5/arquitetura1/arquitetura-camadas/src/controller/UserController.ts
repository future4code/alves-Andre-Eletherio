import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

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
            const input: any = {
                token: req.headers.authorization,
                search: req.query.search,
                page: req.query.page,
                itemsPage: req.query.itemsPage,
                order: req.query.order
            }

            const userBusiness = new UserBusiness();
            const response = await userBusiness.getAllUsers(input);

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id,
                token: req.headers.authorization
            }


            const userBusiness = new UserBusiness();
            const response = await userBusiness.deleteUser(input);

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }
}