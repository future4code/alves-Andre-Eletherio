export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private role: USER_ROLES;

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: USER_ROLES
    ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static toUserModel = (input: any): User => {
        return new User(input.id, input.name, input.email, input.password, input.role);
    }

    public getId = () => {
        return this.id;
    }
    public getName = () => {
        return this.name;
    }
    public getEmail = () => {
        return this.email;
    }
    public getPassowrd = () => {
        return this.password;
    }
    public getRole = () => {
        return this.role;
    }
}

export interface ISignUpInputDTO {
    name: string;
    email: string;
    password: string;
}

export interface ISignUpInputDBDTO {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface ISignUpOutputDTO {
    message: string,
    token: string
}

export interface ILoginInputDTO {
    email: string,
    password: string
}