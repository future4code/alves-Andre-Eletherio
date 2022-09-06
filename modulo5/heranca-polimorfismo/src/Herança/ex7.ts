import { User } from "./ex1";

export class Employee extends User {
    static BENEFITS_VALUE: number = 400;

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

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE;
    }
}

const test: Employee = new Employee("a", "a", "a", "a", new Date("2020-08-09"), 900000);
// console.log(test.calculateTotalSalary());