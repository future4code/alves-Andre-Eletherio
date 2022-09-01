import axios from 'axios';
import { Request, Response } from 'express';
import { connection } from '../data/connection';

const baseUrl = "https://viacep.com.br/ws";

export async function insertUser(req: Request, res: Response) {
    try {
        const {cep, numero, complemento} = req.body
        if (!cep || !numero) {
            throw new Error("Insert all query params.")
        }

        const userInfo = await axios.get(`${baseUrl}/${cep}/json`);
        const { logradouro, bairro, localidade, uf } = userInfo.data;

        await connection.raw(`INSERT INTO testandooo VALUES ('${cep}','${logradouro}', ${+numero}, '${complemento ? complemento : null}', '${bairro}', '${localidade}', '${uf}')`)
        res.send("Success!")
    } catch (error: any) {
        res.send({message: error.message})
    }
}