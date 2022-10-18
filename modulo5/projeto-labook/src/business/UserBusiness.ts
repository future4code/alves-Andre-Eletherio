import { UserDatabase } from "../database/UserDatabase";
import { ILoginInputDTO, ISignUpInputDBDTO, ISignUpInputDTO, ISignUpOutputDTO, User, USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    private userDatabase: UserDatabase;
    private hashManager: HashManager;
    private idGenerator: IdGenerator;
    private authenticator: Authenticator;
    constructor(
        userDatabase: UserDatabase,
        hashManager: HashManager,
        idGenerator: IdGenerator,
        authenticator: Authenticator
    ) {
        this.userDatabase = userDatabase;
        this.hashManager = hashManager;
        this.idGenerator = idGenerator;
        this.authenticator = authenticator;
    }

    public signUp = async (input: ISignUpInputDTO) => {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new Error("Empty Field(s)");
        }

        if (typeof (name) !== "string" || name.length < 3) {
            throw new Error("Invalid name");
        }

        if (typeof (email) !== "string" || email.length < 3 || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Invalid e-mail");
        }

        if (typeof (password) !== "string" || password.length < 6) {
            throw new Error("Invalid password");
        }

        const emailExists: User = await this.userDatabase.findByEmail(email);
        
        if (emailExists) {
            throw new Error("E-mail already exists");
        }

        const hashPassword = await this.hashManager.hash(password);

        const id = this.idGenerator.generate();

        const inputDB: ISignUpInputDBDTO = {
            id,
            name,
            email,
            password: hashPassword,
            role: USER_ROLES.NORMAL
        }

        await this.userDatabase.createUser(inputDB);

        const payload: ITokenPayload = {
            id: inputDB.id,
            role: inputDB.role
        }

        const token = this.authenticator.generateToken(payload);

        const response: ISignUpOutputDTO = {
            message: `User ${inputDB.name} created!`,
            token
        }

        return response;
    }

    public login = async (input: ILoginInputDTO) => {
        const {email, password} = input;

        if (!email || !password){
            throw new Error("Empty field(s)");
        }

        if (typeof(password) !== "string" || password.length < 6){
            throw new Error("Invalid password");
        }

        if (typeof (email) !== "string" || email.length < 3 || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Invalid e-mail");
        }

        const user: User = await this.userDatabase.findByEmail(email);

        if (!user){
            throw new Error("E-mail not found");
        }

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassowrd());

        if(!isPasswordCorrect){
            throw new Error("Wrong password");
        }

        const payload: ITokenPayload = {id: user.getId(), role: user.getRole()};
        const token = this.authenticator.generateToken(payload);

        const response: ISignUpOutputDTO = {
            message: `User ${user.getName()} logged!`,
            token
        }
        
        return response;
    }
}