export type Extract = {
    value: number,
    date: Date,
    description: string
}

export type Account = {
    name: string,
    cpf: string,
    birthDate: Date,
    balance: number,
    spending: Extract[]
}