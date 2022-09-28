export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export interface IUserDB{
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

// export interface Login {
//     email: string,
//     password: string
// }

export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private role: USER_ROLES = USER_ROLES.ADMIN;
    constructor(id: string, name: string, email: string, password: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password);
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