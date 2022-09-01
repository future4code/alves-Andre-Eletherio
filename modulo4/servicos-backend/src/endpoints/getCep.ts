import axios from 'axios';
import { Request, Response } from 'express';
import { CEP } from '../types';

const baseUrl = "https://viacep.com.br/ws";

export async function getCep(req: Request, res: Response) {
    try {
        const cep = req.query.cep
        const userInfo = await axios.get(`${baseUrl}/${cep}/json`);
        const { logradouro, bairro, localidade, uf } = userInfo.data;
        const result: CEP = {
            logradouro: logradouro,
            bairro: bairro,
            cidade: localidade,
            estado: uf
        }
        res.send(result)
    } catch (error: any) {
        res.send({message: error.message})
    }
}