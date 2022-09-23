import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignUpInputDTO } from "../model/User";

export class UserController {
    private userBusiness: UserBusiness;
    constructor(
        userBusiness: UserBusiness
    ){
        this.userBusiness = userBusiness;
    }

    public signUp = async (req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body;

            const input: ISignUpInputDTO = {
                name,
                email,
                password
            }

            const response = await this.userBusiness.signUp(input);
            res.send(response);
            
        } catch (error: any) {
            res.status(res.statusCode || 500).send({message: error.message});
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }
            
            const response = await this.userBusiness.login(input);

            res.send(response);

        } catch (error: any) {
            res.status(res.statusCode || 500).send({message: error.message});           
        }
    }
}