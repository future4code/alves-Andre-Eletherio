import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase{

    async insertUser(id: string, email: string, password: string){
        await this.getConnection().raw(`
            INSERT INTO users_ex (id, email, password) VALUES ('${id}', '${email}', '${password}')
        `)
    }

    async selectUser(email: string){
        const [result] = await this.getConnection().raw(`
            SELECT * FROM users_ex WHERE email = '${email}'
        `)
        return result;
    }

    async getUser(token: string){
        
    }
}