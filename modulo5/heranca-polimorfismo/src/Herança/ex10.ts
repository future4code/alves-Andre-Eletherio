import { Employee } from "./ex7";

class Seller extends Employee {
    static SELLING_COMMISSION: number = 5;

    private salesQuantity: number = 0;

    public setSalesQuantity(value: number): void {
        this.salesQuantity = value;
    }

    public getSalesQuantity(): number {
        return this.salesQuantity;
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + (this.salesQuantity * Seller.SELLING_COMMISSION);
    }
}

// a) Foi impressa o resultado da fórmula passada.

const test: Seller = new Seller("id", "email", "name", "password", new Date("2020-08-09"), 9000000);
// console.log(test.getSalesQuantity());
// test.setSalesQuantity(10);
// console.log(test.getSalesQuantity());
test.setSalesQuantity(10);

console.log(test.calculateTotalSalary());