import { Client } from "./ex1";
import { Commerce } from "./ex3";

// a) e b) São basicamente a mesma coisa, filhas de "Commerce" e implementações da interface "Client". A diferença está no método "calculateBill" e em uma propriedade, que em um é "cpf" e no outro "cnpj".

class CommercialClient extends Commerce implements Client {

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) { super(floorsQuantity, cep) }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCNPJ(): string {
        return this.cnpj;
    }
}