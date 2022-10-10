export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private role: USER_ROLES;
    constructor(id: string, name: string, email: string, password: string, role: USER_ROLES){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    static toUserModel = (input: any): User => {
        return new User(input.id, input.name, input.email, input.password, input.role);
    }

    public getId = (): string => {
        return this.id;
    }
    public getName = (): string => {
        return this.name;
    }
    public getEmail = (): string => {
        return this.email;
    }
    public getPassword = (): string => {
        return this.password;
    }
    public getRole = (): USER_ROLES => {
        return this.role;
    }
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface ISignUpInputDTO {
    name: string,
    email: string,
    password: string
}

export interface ISignUpOutputDTO {
    message: string,
    token: string
}

export interface ILoginInputDTO {
    email: string,
    password: string
}

export interface ILoginOutputDTO {
    message: string,
    token: string
}