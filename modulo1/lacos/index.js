// Exercícios de interpretação de código

// Exercício 1
// O código está imprimindo no console a soma dos número, partindo de 0 até 4.
// O resultado impresso é 10.


// Exercício 2
// a) 19, 21, 23, 25, 27, 30
//
// b) É suficiente, já que podemos utilizar o .indexOf
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   console.log(lista.indexOf(numero));
// }


// Exercício 3
// *
// **
// ***
// ****



// Exercícios de escrita de código

// Exercício 1
const bichinhos = +prompt("Quantos bichinhos de estimação você tem?");
const arrayNomeBichinhos = [];

if (bichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else {
    for (let i = 0; i < bichinhos; i ++) {
        const nomeBichinhos = prompt("Qual o nome deles? Digite um por um.");
        arrayNomeBichinhos.push(nomeBichinhos);
    }
    console.log(arrayNomeBichinhos);
}

// Exercício 2
// a)
const imprimirValor = (array) => {
    for (let i = 0; i < array.length; i++ ) {
        console.log(array[i]);
    }
}
// b)
const imprimirValorDividido = (array) => {
    for (let i = 0; i < array.length; i++ ) {
        console.log(array[i] / 10);
    }
}
// c)
const novoArray = [];
const novoArrayPares = (array) => {
    for (let numeros of array) {
        if (numeros % 2 === 0) {
            novoArray.push(numeros);
        }
    } 
    console.log(novoArray);
}
// d)
const arrayComFrases = [];
const arrayFrases = (array) => {
    for (let i = 0; i < array.length; i++) {
        arrayComFrases.push(`O elemento do índex ${i} é: ${array[i]}`)
    }
    console.log(arrayComFrases);
}
// e)
const maiorMenor = (array) => {
    let menorN = Infinity;
    let maiorN = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorN) {
            maiorN = array[i];
        }
        if (array[i] < menorN) {
            menorN = array[i];
        }
    }
    console.log(`O maior número é ${maiorN}, e o menor número é ${menorN}`);
}





// Desafios

//Desafio 1
// a)
const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
console.log("Vamos jogar!");
// b)
let chute;
let tentativas = 0;
while (chute !== randomNumber) {
    console.log(randomNumber);
    chute = +prompt("Chute um número:");
    console.log(`O número chutado foi ${chute}.`);
    tentativas++;
    if (chute < randomNumber) {
        console.log(`Errou. O número escolhido é maior.`);
    } else if (chute > randomNumber) {
        console.log(`Errou. O número escolhido é menor.`)
    } else { //c)
        console.log(`Acertou\nO número de tentativas foi ${tentativas}`);
    }
}

// Exercício 2
// Foi fácil fazer a alteração. Quase todas as dúvidas que terei ao longo da minha carreira já foram perguntadas e respondidas em fórums, como o Stack Overflow, ou já foram feitas diversas publicações em sites ensinando sobre tal conteúdo. Saber pesquisar e entender cada problema é fundamental para o crescimento.