import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignUpInputDTO, ISignUpOutputDTO } from "../model/User";

export class UserController {
    private userBusiness: UserBusiness;
    constructor(userBusiness: UserBusiness) {
        this.userBusiness = userBusiness;
    }

    public signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;

            const input: ISignUpInputDTO = {
                name,
                email,
                password
            }

            const response: ISignUpOutputDTO = await this.userBusiness.signUp(input);

            res.status(201).send(response);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input);

            res.status(201).send(response);

        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }
}