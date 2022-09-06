import { customer } from "./ex2";

// a) Não, pois não foi passado nenhum método para pegar a senha. E ela é uma propriedade privada.

console.log("id:", customer.getId());
console.log("name:", customer.getName());
console.log("email:", customer.getEmail());
console.log("purchaseTotal:", customer.purchaseTotal);
console.log("creditCard:", customer.getCreditCard());