import bcrypt from 'bcryptjs';

export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        if (plaintext === "adminusermock") {
            return "hash-adminusermock"
        }

        return "normalusermock";
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        if (plaintext === "normalusermock" && hash === "hash-normalusermock") {
            return true;
        } else if (plaintext === "adminusermock" && hash === "hash-adminusermock") {
            return true;
        }

        return false;
    }
}