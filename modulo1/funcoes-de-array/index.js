// Exercícios de interpretação de código

// Exercício 1
// a)   Para cada elemento do array, será impresso o elemento do array, seu indice, e o array inteiro.

// Exercício 2
// a) Será impresso um array com o valor da propriedade "nome" de cada um dos objetos: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// Exercício 3
// a) Será impresso um array contendo todos os objetos cuja propriedade "apelido" não é igual a "Chijo": [{nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Laís Petra", apelido: "Laura"}]



// Exercícios de escrita de código

//Exercício 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a)
 const NomeDog = pets.map((dog) => dog.nome);
// b)
const dogSalsicha = pets.filter((dog) => dog.raca.toLowerCase() === "salsicha");
// c)
const mensagemDog = pets.filter((dog) => dog.raca.toLowerCase() === "poodle").map((poodle) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`);


// Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 // a)
 const nomeProdutos = produtos.map((produto) => produto.nome);
 // b)
 const nomeDesconto = produtos.map((produto) => `${produto.nome} ${produto.preco - (5 / 100 * produto.preco)}`);
// c)
const bebidas = produtos.filter((produto) => produto.categoria.toLowerCase() === "bebidas")
// d)
const produtosYpe = produtos.filter((produto) => produto.nome.toLowerCase().includes("ypê"));
// e)
const fraseCompre = produtosYpe.map((produto) => `Compre ${produto.nome} por ${produto.preco}`);




// Desafios

// Desafio 1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
// a)
const nomeAlfabetica = pokemons.map((pokemon) => pokemon.nome).sort();
// b)
const tiposPokemon = pokemons.map((pokemon) => pokemon.tipo);

const tiposPokemonFiltrado = [...new Set(tiposPokemon)];
console.log(tiposPokemonFiltrado);