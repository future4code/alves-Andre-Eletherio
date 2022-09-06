export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Jonas",
  registrationNumber: 123,
  consumedEnergy: 10,

  calculateBill: ()=>1
}

console.log("name:", client.name);
console.log("registrationNumber:", client.registrationNumber);
console.log("consumedEnergy:", client.consumedEnergy);
console.log("calculateBill:", client.calculateBill());