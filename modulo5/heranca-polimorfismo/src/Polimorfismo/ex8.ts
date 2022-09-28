import { Client } from "./ex1";

class ClientManager {
    private clients: Client[] = [];

    public registerClient(client: Client): void {
        this.clients.push(client);
    }
}