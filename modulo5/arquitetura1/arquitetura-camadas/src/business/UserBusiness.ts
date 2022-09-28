import { UserDatabase } from "../database/UserDatabase";
import { User } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    public signUp = async (input: any) => {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new Error("Missing field(s)");
        }

        // verifica se name é passado, e se ele é uma string
        if (typeof (name) !== "string" || name.length < 3) {
            throw new Error("Invalid name")
        }


        if (typeof (email) !== "string" || email.length < 3) {
            throw new Error("Invalid e-mail")
        }

        const userDatabase1 = new UserDatabase();
        const emailExists = await userDatabase1.findByEmail(email);
        if (emailExists) {
            throw new Error("Email already exists")
        }

        if (password.length < 6 || typeof (password) !== "string") {
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

        if (!email || !password) {
            throw new Error("Empty field(s)");
        }

        if (typeof (email) !== "string" || email?.length < 3) {
            throw new Error("Invalid e-mail");
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof (password) !== "string" || password?.length < 6) {
            throw new Error("Invalid password")
        }

        const userDatabase = new UserDatabase();
        const user: User = await userDatabase.findByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        // const userYuzo = new User(
        //     user.id,
        //     user.name,
        //     user.email,
        //     user.password,
        //     user.role
        // )
        //  Caso não tivesse transformado antes de retornar "user" com "toUserModel"

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

    public getAllUsers = async (input: any) => {
        const { token, search, page, itemsPage, order } = input;

        if (!token || typeof (token) !== "string") {
            throw new Error("Invalid token")
        }

        let name = search;
        let actualPage = page;
        let itemsPerPage = itemsPage;
        let sortOrder = order;

        if (!name || typeof (name) !== "string") {
            name = "";
        }

        if (!page) {
            actualPage = 1;
        }

        if (!itemsPage) {
            itemsPerPage = 1
        }

        if (!order || order !== "asc" && order !== "desc") {
            sortOrder = "asc"
        }

        const authenticator = new Authenticator();
        const isTokenValid = authenticator.getTokenPayload(token);

        if (!isTokenValid) {
            throw new Error("Invalid token!");
        }

        const getUsersInputDB: any = {
            name,
            actualPage,
            itemsPerPage,
            sortOrder
        };

        const userData = new UserDatabase();
        const users = await userData.getUsers(getUsersInputDB);

        const response = users;
        return response;
    }

    public deleteUser = async (input: any) => {
        const {id, token} = input;

        if (!id) {
            throw new Error("Missing id");
        }

        const userDatabase = new UserDatabase();
        const idExists = await userDatabase.findById(id);

        if (!idExists) {
            throw new Error("Id not found");
        }

        if (!token) {
            throw new Error("Missing token");
        }

        const authenticator = new Authenticator();
        const user = authenticator.getTokenPayload(token);
        console.log(user?.role);

        if (user?.role !== "ADMIN") {
            throw new Error("Only admins can delete a user");
        }

        if (user?.id == id) {
            throw new Error("User cannot delete itself!");
        }

        const response = await userDatabase.deleteUser(id);
        return response;
    }
}