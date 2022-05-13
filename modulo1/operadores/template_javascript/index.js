/* 

1. a. false
   b. false
   c. true
   d. boolean

2. Será impressa a concatenação dos dois números digitados pelo usuário.

3. Para realmente somar os números é necessário transformar o input do usuário em valor numérico antes de somar.
    let primeiroNumero = Number(prompt("Digite um numero!"));
    let segundoNumero = Number(prompt("Digite outro numero!"));

    const soma = primeiroNumero + segundoNumero;

    console.log(soma);
*/


/* Exercício 1:

const idadeUsuario = Number(prompt("Qual a sua idade? "));
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga ? "));

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo);
console.log(idadeUsuario - idadeAmigo); */




/* Exercício 2:
const numeroPar = Number(prompt("Digite um número par: "));
console.log(numeroPar % 2);

// Quando fazemos o resto da divisão de um número par por 2, o resultado sempre é 0.
// Se o usuário inserir um número ímpar, o resultado da operação será 1.
*/



/* Exercício 3:
const idadeUsuario = Number(prompt("Qual a sua idade: "));
console.log(idadeUsuario * 12);
console.log(idadeUsuario * 12 * 30);
console.log(idadeUsuario * 12 * 30 * 24);
*/




/* Exercício 4:
const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));

console.log("O primeiro numero é maior que segundo?", numero1 > numero2);
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2);
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0);
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0);
*/




// Desafio

// Desafio 1
console.log((77-32)*(5/9) + 273.15 + " K");
console.log(80 * (9/5) + 32 + " F");
console.log(`${prompt("Graus Celsius: ") * (9/5) + 32} F, ${((30 * (9/5) + 32) - 32) * (5/9) + 273.15} K`);


// Desafio 2
console.log(`Valor a ser pago é: ${(280 * 0.05) - 15/100*(280 * 0.05)}`);


// Desafio 3
console.log(`20lb equivalem a ${20 * 0.45359237} kg`);
console.log(`10.5oz equivalem a ${10.5 * 0.02835} kg`);
console.log(`100 mi equivalem a ${100 * 1609.34} m`);
console.log(`50 ft equicalem a ${50 * 0.3048} m`);
console.log(`103.56gal equivalem a ${103.56 * 3.78541} l`);
const xic = prompt("Xic: ");
console.log(`${xic} xic equivalem a ${xic * 0.24} l`);
