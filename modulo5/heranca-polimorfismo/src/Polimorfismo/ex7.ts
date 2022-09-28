import { Client } from "./ex1";

class ClientManager {
    private clients: Client[] = [];

    public getClientsQuantity(): number {
        return this.clients.length;
    }
}

const test: ClientManager = new ClientManager();
console.log(test);