export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// a) "Não é possível criar uma instância de uma classe abstrata"
// const teste: Place = new Place("123");
// b) Teríamos que criar outra classe, herdeira de "Place", e criar a instância a partir dela.
class Teste extends Place {
    constructor(
        cep: string
    ) {
        super(cep)
    }
}

const test: Teste = new Teste("123")
// console.log(test.getCep());