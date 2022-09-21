import { UserDatabase } from "../database/UserDatabase";
import { User } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    public signUp = async (input: any) => {
        const { name, email, password } = input;

        // verifica se name é passado, e se ele é uma string
        if (!name || typeof (name) !== "string" || name?.length < 3) {
            throw new Error("Invalid name")
        }


        if (!email || typeof (email) !== "string") {
            throw new Error("Invalid e-mail")
        }

        const userDatabase1 = new UserDatabase();
        const emailExists = await userDatabase1.searchUserByEmail(email);
        if (emailExists) {
            throw new Error("Email already exists")
        }

        if (!password || password?.length < 6 || typeof (password) !== "string") {
            throw new Error("Invalid password")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(password)

        const user = new User(id, name, email, hashPassword);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(user);

        const payload: ITokenPayload = { id: user.getId(), role: user.getRole() };
        const authenticator = new Authenticator();
        const token = authenticator.generateToken(payload);

        const response = { token };

        return response;
    }

    public login = async (input: any) => {
        const { email, password } = input;

        if (!email || typeof (email) !== "string") {
            throw new Error("Invalid e-mail");
        }

        if (!password || typeof (password) !== "string" || password?.length < 6) {
            throw new Error("Invalid password")
        }

        const userDatabase = new UserDatabase();
        const user: User = await userDatabase.searchUserByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        const payload: ITokenPayload = { id: user.getId(), role: user.getRole() };
        const authenticator = new Authenticator();
        const token = authenticator.generateToken(payload);

        const hashManager = new HashManager();
        const isPasswordCorrect = await hashManager.compare(password, user.getPassword());

        if (!isPasswordCorrect) {
            throw new Error("Wrong passowrd");
        }

        const response = { token };
        return response;
    }

    public getAllUsers = async (token: any, search: any, page: any, itemsPage: any, order: any) => {
        if (!token || typeof(token) !== "string") {
            throw new Error("Invalid token")
        }

        let name = search;
        let actualPage = page;
        let itemsPerPage = itemsPage;
        let sortOrder = order;

        if (!name || typeof(name) !== "string") {
            name = "";
        }

        if(!page) {
            actualPage = 1;
        }

        if(!itemsPage) {
            itemsPerPage = 1
        }

        if (!order || order !== "asc" && order !== "desc"){
            sortOrder = "asc"
        }

        const authenticator = new Authenticator();
        const isTokenValid = authenticator.getTokenPayload(token);

        if (!isTokenValid) {
            throw new Error("Invalid token!");
        }

        const userData = new UserDatabase();
        const users = await userData.getUsers(name, actualPage, itemsPerPage, sortOrder);

        const response = users;
        return response;
    }

    public deleteUser = async (id: string, token: any) => {
        if (!id) {
            throw new Error("Missing id");
        }

        const userDatabase = new UserDatabase();
        const idExists = await userDatabase.searchUserById(id);

        if (!idExists){
            throw new Error("Id not found");
        }

        if (!token) {
            throw new Error("Missing token");
        }

        const authenticator = new Authenticator();
        const user =  authenticator.getTokenPayload(token);
        console.log(user?.role);
        
        if (user?.role !== "ADMIN"){
            throw new Error("Only admins can delete a user");
        }

        if(user?.id == id) {
            throw new Error("User cannot delete itself!");
        }

        const response = await userDatabase.deleteUser(id);
        return response;
    }
}