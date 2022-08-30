import axios from 'axios'
import { baseURL } from './baseURL'

type user = {
    id: string;
    name: string;
    email: string;
}

async function main(users: user[], message: string): Promise<void> {
    try {
        for (const user of users) {
            axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
            console.log("Enviada para", user.id)
        }
    } catch (error: any) {
        console.log("Error")
    }
}

const arrayUsers = [{ "id": "4188567e-27c6-446c-8b4e-1bb1b92b6292", "email": "syrio@labenu.com.br", "name": "Syrio Forel, o de Braavos" }, { "id": "44671e4b-1e41-4247-ad97-b2da9180aac4", "email": "joao@labenu.com.br", "name": "Johnny, o brabo" }]
const message = "Nova notícia"

main(arrayUsers, message)