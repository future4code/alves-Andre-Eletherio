import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IDeleteUserInputDTO, IEditUserInputDTO, IGetUsersInputDTO, ILoginInputDTO, ISignUpInputDTO } from "../model/User";

export class UserController {
    private userBusiness: UserBusiness;
    constructor(
        userBusiness: UserBusiness
    ) {
        this.userBusiness = userBusiness;
    }

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignUpInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            const response = await this.userBusiness.signUp(input);

            res.status(201).send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: IGetUsersInputDTO = {
                token: req.headers.authorization as string,
                search: req.query.search as string,
                page: req.query.page as string,
                itemsPage: req.query.itemsPage as string,
                order: req.query.order as string
            }

            const response = await this.userBusiness.getUsers(input);

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: IDeleteUserInputDTO = {
                id: req.params.id,
                token: req.headers.authorization as string
            }


            const response = await this.userBusiness.deleteUser(input);

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;
            const { name, email, password } = req.body;
            const id = req.query.id as string;

            const input: IEditUserInputDTO = {
                token,
                id,
                name,
                email,
                password
            }

            const response = await this.userBusiness.edit(input);

            res.send(response);
        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }
}