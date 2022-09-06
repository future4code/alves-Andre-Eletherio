import { User } from "./ex1";

// a) 1 vez.
// b) 1 vez. Porque Customer é filha de User, e ao chamá-la, também executamos User.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

export const customer: Customer = new Customer("abc", "custumer@gmail.com", "custumer", "password", "asdfd13213");