export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        if (plaintext == "usermockadmin") {
            return "usermockadmin-hash"
        } else {
            return "usermocknormal-hash"
        }
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        if (plaintext == "usermocknormal" && hash == "usermocknormal-hash") {
            return true;
        } else if (plaintext == "usermockadmin" && hash == "usermockadmin-hash") {
            return true;
        }

        return false;
    }
}