export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
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

// da controller para business
export interface IGetUsersInputDTO {
    token: string,
    search: string,
    page: string,
    itemsPage: string,
    order: string
}

// da business para database
export interface IGetUserInputDBDTO {
    search: string,
    order: string,
    limit: number,
    offset: number
}

export interface IDeleteUserInputDTO {
    id: string,
    token: string
}

export interface IEditUserInputDTO {
    token: string,
    id: string,
    name: string,
    email: string,
    password: string
}

export interface IEditUserInputDBDTO {
    id: string,
    name: string,
    email: string,
    password: string
}

export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private role: USER_ROLES;
    constructor(id: string, name: string, email: string, password: string, role: USER_ROLES) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password, data.role);
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
    public getPassword = () => {
        return this.password;
    }
    public getRole = () => {
        return this.role;
    }
}