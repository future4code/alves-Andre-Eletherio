import axios from 'axios'
import { baseURL } from './baseURL'

// a) get subscribers
// b) : Promisse<any[]>
// c)
async function main(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}

main().then(console.log)