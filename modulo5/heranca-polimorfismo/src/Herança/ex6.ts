import { User } from "./ex1";

export class Employee extends User {
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        protected admissionDate: Date,
        protected baseSalary: number
    ) { super(id, email, name, password) }

    public getAdmissionDate(): Date {
        return this.admissionDate;
    }
    public getBaseSalary(): number {
        return this.baseSalary;
    }
}

const test: Employee = new Employee("a", "a", "a", "a", new Date("2020-08-09"), 900000);
console.log(test);

// a) Uma vez.
// b) Como todas as propriedades são privadas ou protegidas, só podemos printar na tela àquelas que tenham um método getter que as retornem.