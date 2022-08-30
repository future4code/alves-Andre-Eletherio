import axios from 'axios'
import { baseURL } from './baseURL'

// a) O "async" vem antes de "function", e todas as outras diferenças padrão, como a 'seta' => 
// b)
const main = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}

main().then(console.log)