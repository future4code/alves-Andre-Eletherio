// EXERCÍCIO 1

// a) É um método especial que cria e inicializa um objeto a partir de uma classe. Para chamá-lo escrevemos "constructor([argumentos] {...})"
// b) Aparece 1 vez
type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }
    setTransactions(transaction: Transaction): void {
        this.transactions = [...this.transactions, transaction];
    }

}

const user1: UserAccount = new UserAccount("42442234223", "Jonas", 40);
// c) Para ter acesso às propriedades privadas de uma classe devemos ter métodos específicos que retornem ou alterem o seu valor, os "getters" e "setters".

// EXERCÍCIO 2

class TransactionClass {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description,
            this.value = value,
            this.date = date
    }

    getDescription(): string {
        return this.description;
    }
    getValue(): number {
        return this.value;
    }
    getDate(): string {
        return this.date;
    }
}

const transaction1: TransactionClass = new TransactionClass("Salário outubro", 10000, "2022-10-01");
// user1.setTransactions(transaction1);

// EXERCÍCIO 3
class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public getAccounts(): UserAccount[] {
        return this.accounts;
    }
    public setAccounts(value: UserAccount[]) {
        this.accounts = value;
    }
}

const bank1: Bank = new Bank([user1]);
console.log(bank1);
const user2: UserAccount = new UserAccount("1", "j", 1);
bank1.setAccounts([...bank1.getAccounts(), user2]);
console.log(bank1);