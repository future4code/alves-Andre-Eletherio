import { Employee } from "./ex7";

class Seller extends Employee {

}

const test: Seller = new Seller("id", "email", "name", "password", new Date("2020-08-09"), 9000000)

// a) Id, email, name, password, admissionDate, baseSalary.
// b) É possível imprimir somente àquelas que tiverem getters retornando seu valor, visto que as propriedades são privadas/protegidas.