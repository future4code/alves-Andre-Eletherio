import { Client } from "./ex1";
import { Industry } from "./ex3";

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: number,
        machinesQuantity: number,
        cep: string,
    ) { super(machinesQuantity, cep) }
    public calculateBill(): number {
        return (this.consumedEnergy * 0.45) + this.machinesQuantity * 100;
        }

        public getIndustryNumber(): number {
            return this.industryNumber;
        }
}

const amazon: IndustrialClient = new IndustrialClient("Amazon", 123, 100, 20, 100, "adifji12331");
console.log(amazon.calculateBill())