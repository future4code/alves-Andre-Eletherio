import { UserDatabase } from "../database/UserDatabase";
import { EmailAlreadyExists } from "../errors/EmailAlreadyExists";
import { EmailNotRegistered } from "../errors/EmailNotRegistered";
import { EmptyField } from "../errors/EmptyField(s)";
import { InvalidEmail } from "../errors/InvalidEmail";
import { InvalidName } from "../errors/InvalidName";
import { InvalidNameLength } from "../errors/InvalidNameLength";
import { InvalidPassword } from "../errors/InvalidPassword";
import { InvalidPasswordLength } from "../errors/InvalidPasswordLength";
import { WrongPassowrd } from "../errors/WrongPassword";
import { ILoginInputDTO, ILoginOutputDTO, ISignUpInputDTO, ISignUpOutputDTO, IUserDB, User, USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    private userDatabase: UserDatabase;
    private hashManager: HashManager
    private idGenerator: IdGenerator;
    private authenticator: Authenticator;
    constructor(userDatabase: UserDatabase, hashManager: HashManager, idGenerator: IdGenerator, authenticator: Authenticator) {
        this.userDatabase = userDatabase;
        this.hashManager = hashManager;
        this.idGenerator = idGenerator;
        this.authenticator = authenticator;
    }

    public signUp = async (input: ISignUpInputDTO): Promise<ISignUpOutputDTO> => {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new EmptyField();
        }

        if (typeof (name) !== "string") {
            throw new InvalidName();
        }

        if (typeof (email) !== "string" || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new InvalidEmail();
        }

        if (typeof (password) !== "string") {
            throw new InvalidPassword();
        }

        if (name.length < 3) {
            throw new InvalidNameLength();
        }

        if (password.length < 6) {
            throw new InvalidPasswordLength();
        }

        const emailExists = await this.userDatabase.findByEmail(email);


        if (emailExists) {
            throw new EmailAlreadyExists();
        }

        const hashedPassword = await this.hashManager.hash(password);

        const id = this.idGenerator.generate();

        const user: IUserDB = {
            id,
            name,
            email,
            password: hashedPassword,
            role: USER_ROLES.NORMAL
        }

        await this.userDatabase.register(user);

        const payload: ITokenPayload = {
            id,
            role: user.role
        }

        const token = this.authenticator.generateToken(payload);

        const response: ISignUpOutputDTO = {
            message: `User ${user.name} registered`,
            token
        }

        return response;
    }

    public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
        const { email, password } = input;

        if (!email || !password) {
            throw new EmptyField();
        }

        if (typeof (email) !== "string" || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new InvalidEmail;
        }

        if (typeof (password) !== "string" || password.length < 6) {
            throw new InvalidPassword;
        }

        const user: User = await this.userDatabase.findByEmail(email);

        if (!user) {
            throw new EmailNotRegistered();
        }

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword());

        if (!isPasswordCorrect) {
            throw new WrongPassowrd();
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload);

        const response: ILoginOutputDTO = {
            message: `User ${user.getName()} logged in!`,
            token
        }

        return response;
    }
}