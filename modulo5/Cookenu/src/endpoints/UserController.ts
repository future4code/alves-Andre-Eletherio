import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { HashManager } from "../services/HashManager";
import { MissingFields } from "../error/MissingFields";
import { EmailExists } from "../error/EmailExists";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { PassowrdTooShort } from "../error/PasswordTooShort";
import { EmailOrPasswordIncorrect } from "../error/EmailOrPasswordIncorrect";
import { IdNotFound } from "../error/IdNotFound";

export class UserController {

    public signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                throw new MissingFields();
            }

            const userData = new UserData();
            const emailUser = await userData.findUserByEmail(email);

            if (emailUser) {
                throw new EmailExists();
            }

            if (password.length < 6) {
                throw new PassowrdTooShort();
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const hashManager = new HashManager();
            const hashedPassword = await hashManager.hash(password);

            const user = new User(id, name, email, hashedPassword);
            await userData.createUser(user);

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({ id });

            res.send({ message: `User ${name} registered successfully!`, token });


        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                throw new MissingFields();
            }

            const userData = new UserData();
            const user = await userData.findUserByEmail(email);

            if (!user) {
                throw new EmailOrPasswordIncorrect();
            }

            const hashManager = new HashManager();
            const isPasswordCorrect = await hashManager.compare(password, user.getPassword());

            if (!isPasswordCorrect) {
                throw new EmailOrPasswordIncorrect();
            }

            const authenticator = new Authenticator();
            const token = authenticator.generateToken({ id: user.getId() });

            res.send({ token });

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public selfInformations = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization;

            if (!token) {
                throw new MissingFields();
            }

            const authenticator = new Authenticator();
            const payload = authenticator.getTokenData(token);

            const userData = new UserData();
            const user = await userData.findUserById(payload.id);

            res.send({ id: user.getId(), name: user.getName(), email: user.getEmail() });


        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message });
        }
    }

    public userInformation = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;

            const userData = new UserData();
            const user = await userData.findUserById(id);

            if (!user) {
                throw new IdNotFound();
            }

            res.send({id: user.getId(), name: user.getName(), email: user.getEmail()});

        } catch (error: any) {
            res.status(res.statusCode || 500).send({message: error.message});
        }
    }

    public followUser = async (req: Request, res: Response) => {
        try {
            const followedId = req.params.followedId;
            const token = req.headers.authorization;

            if (!followedId || !token) {
                throw new MissingFields();
            }

            const authenticator = new Authenticator();
            const follower = authenticator.getTokenData(token);

            const useData = new UserData();
            await useData.followUser(followedId, follower.id);

            res.send("ok");

        } catch (error: any) {
            res.status(res.statusCode).send({ message: error.message });
        }
    }

    public followeesRecipes = async (req: Request, res: Response)=> {
        try {
            const token = req.headers.authorization;

            if(!token){
                throw new MissingFields();
            }

            const authenticator = new Authenticator();
            const user = authenticator.getTokenData(token);

            const userData = new UserData();
            const recipes = await userData.followeesRecipes(user.id);

            res.send(recipes);
            
        } catch (error: any) {
            res.status(res.statusCode).send({message: error.message});
        }
    }
}