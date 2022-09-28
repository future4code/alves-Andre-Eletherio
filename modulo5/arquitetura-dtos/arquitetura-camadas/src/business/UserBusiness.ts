import { UserDatabase } from "../database/UserDatabase";
import { IDeleteUserInputDTO, IEditUserInputDBDTO, IEditUserInputDTO, IGetUserInputDBDTO, IGetUsersInputDTO, ILoginInputDTO, ISignUpInputDTO, ISignUpOutputDTO, User, USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    public signUp = async (input: ISignUpInputDTO) => {
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

        const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(user);

        const payload: ITokenPayload = { id: user.getId(), role: user.getRole() };
        const authenticator = new Authenticator();
        const token = authenticator.generateToken(payload);

        const response: ISignUpOutputDTO = {
            message: "Sign up completed!",
            token
        };
        // tipei quei para treinar, mas imagino que não seja muito necessário
        // já que o retorno era só um token mesmo, fiz isso para trinar.

        // Pensei tabém em fazer uma interface de resposta padrão, com
        // uma mensagem e a resposta (token),
        // já que é o mesmo padrão do método "login" abaixo.

        return response;
    }

    public login = async (input: ILoginInputDTO) => {
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

        const hashManager = new HashManager();
        const isPasswordCorrect = await hashManager.compare(password, user.getPassword());

        if (!isPasswordCorrect) {
            throw new Error("Wrong passowrd");
        }

        const payload: ITokenPayload = { id: user.getId(), role: user.getRole() };

        const authenticator = new Authenticator();
        const token = authenticator.generateToken(payload);

        const response = { token };
        return response;
    }

    public getUsers = async (input: IGetUsersInputDTO) => {
        const token = input.token;
        const search = input.search || "";
        const page = Number(input.page) || 1;
        const limit = Number(input.itemsPage) || 1;
        const order = input.order || "ASC"

        const offset = limit * (page - 1)

        if (!token) {
            throw new Error("Missing token")
        }

        const authenticator = new Authenticator();
        const isTokenValid = authenticator.getTokenPayload(token);

        if (!isTokenValid) {
            throw new Error("Invalid token!");
        }

        const getUsersInputDB: IGetUserInputDBDTO = {
            search,
            order,
            limit,
            offset
        };

        const userData = new UserDatabase();
        const users = await userData.getUsers(getUsersInputDB);

        const response = users;
        return response;
    }

    public deleteUser = async (input: IDeleteUserInputDTO) => {
        const { id, token } = input;

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

        if (!user) {
            throw new Error("Invalid  or missing token");
        }

        if (user.role !== USER_ROLES.ADMIN) {
            throw new Error("Only admins can delete a user");
        }

        if (user.id == id) {
            throw new Error("User cannot delete itself!");
        }

        const response = await userDatabase.deleteUser(id);
        return response;
    }

    public edit = async (input: IEditUserInputDTO) => {
        const token = input.token;

        if (!token){
            throw new Error("Missing token");
        }

        const authenticator = new Authenticator();
        const tokenUser = authenticator.getTokenPayload(token);

        if(!tokenUser){
            throw new Error("Invalid token");
        }
        
        const id = input.id || tokenUser.id;
        
        if (tokenUser.role !== USER_ROLES.ADMIN && id !== tokenUser.id){
            throw new Error("Only admins can edit other users");
        }
        
        const userDatabase = new UserDatabase();
        const user: User = await userDatabase.findById(id);
        
        const name = input.name || user.getName();
        const email = input.email || user.getEmail();

        const hashManager = new HashManager();
        const password = input.password ? await hashManager.hash(input.password) : user.getPassword();

        const inputDB: IEditUserInputDBDTO = {
            id,
            name,
            email,
            password
        }

        const response = await userDatabase.editUser(inputDB);
        return response;
    }
}