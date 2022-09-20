import {Account} from './types'

export const dataBase: Account[] = [
    {
        name: 'José',
        cpf: "13221323213",
        birthDate: new Date(9/23/1970),
        balance: 2000,
        spending: [{
            value: -200,
            date: new Date(8/8/2022),
            description: 'Compra de cigarro'
        }]
    },
    {
        name: 'Maria',
        cpf: "18374926384",
        birthDate: new Date(10/23/1970),
        balance: 4000,
        spending: [{
            value: -100,
            date: new Date(18/8/2022),
            description: 'Compra de grama'
        }]
    }
]