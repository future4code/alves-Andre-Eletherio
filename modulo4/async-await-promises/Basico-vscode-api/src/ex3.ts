import axios from 'axios'
import { baseURL } from './baseURL'

// a) Apenas se o retorno da função não for do tipo especificado.
// b) Pois dessa maneira garantimos que a função somente retorna os valores desejados, impedindo erros.
// c)
type user = {
    id: string;
    name: string;
    email: string;
}

async function main(): Promise<user[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: user) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
}

main().then(console.log)