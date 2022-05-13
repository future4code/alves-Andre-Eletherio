/* Exercícios de Interpretação

Exercício 1:
10
10 5


Exercício 2:
10 10 10


Exercício 3:
let p -> horasTrabalhoDia
let t -> salarioDia */



// Exercícios de Escrita de Código

//Exercício 1:
let nome;
let idade;

console.log(typeof nome, typeof idade);

// O tipo é indefinido pois não foi passado um valor para as variáveis.

nome = prompt("Qual é o seu nome? ");
idade = Number(prompt("Qual a sua idade? "));

console.log(typeof nome, typeof idade);

// Com um valor atribuido, typeof especifica o tipo das variáveis.

alert(`Olá ${nome}, você tem ${idade} anos`)


//Exercício 2:
const p1 = "Você gosta de futebol?";
const p2 = "Você gosta de pizza?";
const p3 = "Você gosta de macarrão?";

const r1 = prompt(p1);
const r2 = prompt(p2);
const r3 = prompt(p3);

console.log(p1, "-", r1)
console.log(p2, "-", r2)
console.log(p3, "-", r3)



// Exercício 3:

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10



//Desafios

const numero1 = Number(prompt("Primeiro número: "));
const numero2 = Number(prompt("Segundo número: "));

console.log(`O primeiro número somado ao segundo número resulta em: ${numero1 + numero2}`);
console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${numero1 * numero2}`);