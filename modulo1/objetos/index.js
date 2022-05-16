// Exercícios de interpretação de código

// Exercício 1
// a) Matheus Nachtergaele
//    Virginia Cavendish
//    canal: "Globo", horario: "14h"

// Exercício 2
// a) nome: "Juca", idade: 3, raca: "SRD"
//    nome: "Juba", idade: 3, raca: "SRD"
//    nome: "Jubo", idade: 3, raca: "SRD"
// b) Copia todas as propriedades do objeto indicado.

// Exercício 3
// a) false
//    undefined
// b) No primeiro console, ele printou o valor da propriedade "backender", que é false. No segundo console, ele printou undefined, visto que não há uma propriedade com o nome passado, ou seja, é indefinida.


// Exercícios de escrita de código

//Exercício 1
// a)
const pessoa = {
    nome: "Peter Parker",
    apelidos: ["Teioso", "Amigo da Vizinhança", "Ameaça"]
}

const mensagem = obj => console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}.`)
mensagem(pessoa);
// b)
const novosApelidos = {
    ...pessoa,
    apelidos: ["Inseto", "Porco Aranha", "Pete"]
}
mensagem(novosApelidos);


// Exercício 2
// a)
const objeto1 = {
    nome: "Harry",
    idade: 25,
    profissao: "rico"
}

const objeto2 = {
    nome: "Jim",
    idade: 28,
    profissao: "Vendas"
}
// b)
function exercicio2b (objeto) {
    const array2b = [`${objeto.nome}, ${objeto.nome.length}, ${objeto.idade}, ${objeto.profissao}, ${objeto.profissao.length}`];
    return array2b;
}
console.log(exercicio2b(objeto1));


// Exercício 3
// a)
const carrinho = [];
// b)
const fruta1 = {
    nome: "maça",
    disponibilidade: true
}
const fruta2 = {
    nome: "Pera",
    disponibilidade: true
}
const fruta3 = {
    nome: "Melancia",
    disponibilidade: true
}

function recebeFruta (fruta) {
    carrinho.push(fruta);
}
recebeFruta(fruta1);
recebeFruta(fruta2);
recebeFruta(fruta3);

console.log(carrinho);


// Desafios
// Desafio 1
const pessoaDesafio1 = {}

function pergunta (objetoDesafio1) {
    objetoDesafio1.nome = prompt("Qual é o seu nome? ");
    objetoDesafio1.idade = prompt("Qual é a sua idade? ");
    objetoDesafio1.profissao = prompt("Qual é a sua profissão? ");
}
pergunta(pessoaDesafio1);

console.log(pessoaDesafio1);
console.log(typeof(pessoaDesafio1));

// Desafio 2
const primeiroFilme = {
    nome: "Homem Aranha",
    lancamento: 2002
}
const segundoFilme = {
    nome: "Homem Aranha 2",
    lancamento: 2004
}

const filmes = (filme1, filme2) => {
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.lancamento < filme2.lancamento}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.lancamento === filme2.lancamento}`);
}

filmes(primeiroFilme, segundoFilme);

// Desafio 3
const disponibilidadeFruta = frutaDesafio3 => frutaDesafio3.disponibilidade = false;
disponibilidadeFruta(fruta1);
console.log(fruta1);