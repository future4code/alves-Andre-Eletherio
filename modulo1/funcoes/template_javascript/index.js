// Exercícios de interpretação de código

// Exercício 1:
// a) 10
//    50
// b) Não apareceria nada.

// Exercício 2
// a) Essa função modifica o texto inserido pelo usuário, deixando todos os caracteres minúsculos. Ela também verifica se há a presença da palavra "cenoura", retornando true ou false.
// b) i.   true
//    ii.  true
//    iii. true




//Exercícios de escrita de código

// Exercício 1
// a)
function voce() {
    const nome = "André";
    const idade = 20;
    const endereco = "Petrópolis";
    const profissao = "estudante";
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}
voce();

// // b)
const pessoa = (nome2, idade2, endereco2, profissao2) => `Eu sou ${nome2}, tenho ${idade2} anos, moro em ${endereco2} e sou ${profissao2}.`;
console.log(pessoa("André", 20, "Petrópolis", "Estudante"));


// Exercício 2
// a
const soma = (a,b) => a + b;
console.log(soma(3,3));
// b
const maior = (a,b) => a > b;
console.log(maior(3,2));
// c
const parImpar = a => a % 2 === 0;
console.log(parImpar(2));
// d
const upper = frase => {
    console.log(frase.length);
    console.log(frase.toUpperCase());
}
upper("Oi, tudo bem?");


// Exercício 3
const sum = (x,y) => console.log(`Soma: ${x+y}`);
const sub = (x,y) => console.log(`Diferença ${x-y}`);
const mul = (x,y) => console.log(`Multiplicação ${x*y}`);
const div = (x,y) => console.log(`Divisão ${x/y}`);

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));

console.log(`Números inseridos: ${n1} e ${n2}`);
sum(n1, n2);
sub(n1, n2);
mul(n1, n2);
div(n1, n2);



// Desafios

// Desafio 1
// a)
const arrow = a => console.log(a);

// b)
const funcao = (a,b) => arrow(a + b);
funcao(3,3);


// Desafio 2
const pitagoras = (cateto1, cateto2) => {
    let i = (cateto1 * cateto1 + cateto2 * cateto2);
    let j = 1;
    let contagem = 0;
    let aproximadamente = false;

    while (i > 0) {
        i = i - j;
        j += 2;
        contagem += 1;
        if (i > 0 && i - j < 0) {
            aproximadamente = true;
            break;
        }
    }

    if (aproximadamente === false) {
        console.log(`Hipotenusa é ${contagem}`);
    }
    else {
        console.log(`Hipotenusa é aproximadamente ${contagem},5`);
    };
}


const c1 = +prompt("Cateto 1: ");
const c2 = +prompt("Cateto 2: ");

pitagoras(c1,c2);