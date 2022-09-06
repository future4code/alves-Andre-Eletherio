import { Client } from "./ex1";
import { Residence } from "./ex3";

// a) Essa classe posusi todos os métodos e propriedades de "Residence" e "Client", já que é filha do primeiro, e implementa o segundo. Além desses, possui também a propriedade "cpf", criada para ela.

export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string,
    ) { super(residentsQuantity, cep) }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

const ok: ResidentialClient = new ResidentialClient("Jonas", 10, 100, "123", 1000, "123456");
console.log(ok);