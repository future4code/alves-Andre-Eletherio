import axios from 'axios'
import { baseURL } from './baseURL'

// a) Ela foz com que as requisições sejam feitas todas de uma vez, o que melhora o desempenho do código, já que não é mais necessário aguardar o témino de uma para começar a outra.
// b) Utilizando o Promisse.all é possível enviar as mensagens mais rapidamente.
// c)
type user = {
    id: string;
    name: string;
    email: string;
}

async function main(users: user[], message: string): Promise<void> {
    try {
        const promisses = users.map((user) => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        })
        await Promise.all(promisses)
    } catch (error: any) {
        console.log("Error")
    }
}

const arrayUsers = [{ "id": "4188567e-27c6-446c-8b4e-1bb1b92b6292", "email": "syrio@labenu.com.br", "name": "Syrio Forel, o de Braavos" }, { "id": "44671e4b-1e41-4247-ad97-b2da9180aac4", "email": "joao@labenu.com.br", "name": "Johnny, o brabo" }]
const message = "Nova notícia"

main(arrayUsers, message)