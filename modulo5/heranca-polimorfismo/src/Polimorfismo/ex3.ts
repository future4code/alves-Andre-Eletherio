import { Place } from "./ex2";

export class Residence extends Place {
    constructor(
        private residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    }
}

const residence: Residence = new Residence(2, "123");



export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
}

const commerce: Commerce = new Commerce(3, "456");



export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getIndustry(): number {
        return this.machinesQuantity;
    }
}

const industry: Industry = new Industry(10, "789");

// console.log(residence, commerce, industry);