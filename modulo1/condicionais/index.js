// Exercícios de interpretação de código

// Exercício 1
// a) Testa se o número é par.
// b) Para todos os números pares.
// c) Para números ímpares.

// Exercício 2
// a) Ele recebe o nome de uma fruta e retorna uma frase contendo seu nome e preço.
// b) O preço da fruta Maçã é R$ 2.25
// c) O preço da fruta Pêra é R$ 5

// Exercício 3

// a) Pedindo um número ao usuário, e o atribuindo a variável "numero".
// b) 10. Esse número passou no teste
//        Erro
//   -10. undefined
// c) Haverá um erro no "console.log(mensagem)", pois a declaração da variável mensagem dentro do escopo de "if(numero > 0)" faz com que ela não exista para o console.log que vem após o fechamento desse escopo.



// Exercícios de escrita de código

// Exercício 1
const idadeUsuário1 = +prompt("Qual a sua idade? ");

if (idadeUsuário1 >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

// Exercício 2
const periodoEstudo = prompt("Em qual período você estuda? Digite M (matutino), V (vespertino) ou N (noturno)").toLowerCase();

if (periodoEstudo === "m") {
    console.log("Bom Dia!");
} else if (periodoEstudo === "t") {
    console.log("Boa Tarde!");
} else if (periodoEstudo === "n"){
    console.log("Boa Noite!");
} else {
    console.log("Insira uma alternativa válida");
}

// Exercício 3

switch (periodoEstudo) {
    case "m":
        console.log("Bom Dia!");
        break;
    case "t":
        console.log ("Boa Tarde!");
        break;
    case "n":
        console.log("Boa Noite!");
        break;
    default:
        console.log("Insira uma alternativa válida");
}

// Exercício 4
const genero = prompt("Qual o gênero do filme?").toLowerCase();
const preco = +prompt("Qual o preço do ingresso?");

if (genero === "fantasia" && preco < 15) {
    const lanchinho = prompt("Qual lanchinho você vai comprar?");
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}`);
} else {
    console.log("Escolha outro filme :(");
}



// Desafios

// Desafio 2
const nomeCompleto = prompt("Nome completo:");
let tipoJogo = prompt("Qual o tipo do jogo? Insira: IN (internacional), DO (doméstico)").toLowerCase();
let etapaJogo = prompt("Qual a etapado jogo? Insira: SF (semi-final), DT (disputa terceiro lugar), FI (final)").toLowerCase();
const categoria = prompt("Qual a categoria? 1, 2, 3, ou 4");
const qntIngressos = +prompt("Quantidade de ingressos?");
let precoIngresso;
let precoTotal;
let precoTotalStr;

if (etapaJogo === "sf") {
    switch (categoria) {
        case "1":
            precoIngresso = 1320;
            break;
        case "2":
            precoIngresso = 880;
            break;
        case "3":
            precoIngresso = 550;
            break;
        case "4":
            precoIngresso = 220;
            break;
    }
} else if (etapaJogo === "dt") {
    switch (categoria) {
        case "1":
            precoIngresso = 660;
            break;
        case "2":
            precoIngresso = 440;
            break;
        case "3":
            precoIngresso = 330;
            break;
        case "4":
            precoIngresso = 170;
            break;
    }
} else if (etapaJogo === "fi") {
    switch (categoria) {
        case "1":
            precoIngresso = 1980;
            break;
        case "2":
            precoIngresso = 1320;
            break;
        case "3":
            precoIngresso = 880;
            break;
        case "4":
            precoIngresso = 330;
            break;
    }
}

if (tipoJogo === "do") {
    precoTotal = precoIngresso * qntIngressos;
    precoTotalStr = `R$ ${precoTotal}`;
} else if (tipoJogo === "in") {
    precoIngresso /= 4.10;
    precoTotal = precoIngresso * qntIngressos;
    precoTotalStr = `U$ ${precoTotal}`;
}

switch (tipoJogo) {
    case "in":
        tipoJogo = "Internacional";
        break;
    case "do":
        tipoJogo = "Nacional";
        break;
}

switch (etapaJogo) {
    case "sf":
        etapaJogo = "Semi Final";
        break;
    case "dt":
        etapaJogo = "Decisão de Terceiro Lugar";
        break;
    case "fi":
        etapaJogo = "Final";
        break;
}

console.log(`
--- Dados da compra ---\n
Nome do cliente: ${nomeCompleto}\n
Tipo do jogo: ${tipoJogo}\n
Etapa do jogo: ${etapaJogo}\n
Categoria: ${categoria}\n
Quantidade de Ingressos: ${qntIngressos}\n
---Valores---\n
Valor do ingresso: R$ ${precoIngresso}\n
Valor total: R$ ${precoTotalStr}
`)