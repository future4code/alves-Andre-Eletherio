import knex, { Knex } from "knex";
import dotenv from 'dotenv'

dotenv.config();

export class BaseDataBase {
    private connection: Knex | null = null;

    protected getConnection() {
        if (!this.connection) {
            this.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_SCHEMA
                }
            })
        }
        return this.connection
    }
}