import { Employee } from "./ex7";

class Seller extends Employee {
    private salesQuantity: number = 0;

    public setSalesQuantity(value: number): void {
        this.salesQuantity = value;
    }

    public getSalesQuantity(): number {
        return this.salesQuantity;
    }
}

// a) Não, porque ela é privada

const test: Seller = new Seller("id", "email", "name", "password", new Date("2020-08-09"), 9000000);
console.log(test.getSalesQuantity());
test.setSalesQuantity(10);
console.log(test.getSalesQuantity());